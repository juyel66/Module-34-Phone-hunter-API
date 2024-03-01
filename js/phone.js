const loadPhone = async(searchText=13,isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data =await res.json();
    const phones = data.data
    // console.log(phone)
    displayPhone(phones,isShowAll)

}

const displayPhone = (phones,isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    // clear phone container cards before adding new cards 
    phoneContainer.textContent= '';
  // ডিস্প্লে তে যদি ১২ টার বেশি ফোন আসে তাহলে নিচের কন্ডিশন চেক করে শো ওল বাটন শো করবে 
  const showAllContainer = document.getElementById('show-all-container')
  if(phones.length>12 &&!isShowAll){
    showAllContainer.classList.remove('hidden')
  }
  else{
    showAllContainer.classList.add('hidden');
  }

  console.log('is show all', isShowAll)
  
    // clear end
    // search limit bellow is not show all 
    if(!isShowAll){
      phones = phones.slice(0,12);
    }

    // console.log(phones)
    phones.forEach(phone => {
        console.log(phone);
        //step-2: create a div 
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card card-compact p-4 bg-gray-100  shadow-xl`;
        // step-3: innerHTML
        phoneCard.innerHTML= `      <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title flex justify-center">${phone.phone_name}</h2>
          <p class="flex justify-center">If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button onclick="handleShowDetails('${phone.slug}'); show_details_modal.showModal()" class="btn btn-primary text-2xl font-extrabold">Show Details</button>
          </div>
        </div>`;
        // step-4: append Child
        phoneContainer.appendChild(phoneCard);
        
    }); 
    // hide loading spinner 
    toggleLoadingSpinner(false);
}



// handle search button 

// একটা ইনপুট ফিল্ড এ ক্লিক করলে ভ্যালু গুলো শো করানোর জন্য নিচের কোড টি

const handleSearch = (isShowAll) =>{
  toggleLoadingSpinner(true)
    const searchField = document.getElementById('search-field');
   const searchText =searchField.value;
  //  console.log(searchText) 
   loadPhone(searchText,isShowAll)
}

 
// একটা ইনপুট ফিল্ড এ ক্লিক করলে ভ্যালু গুলো শো করানোর জন্য নিচের কোড টি
// handle search recap 

// const handleSearch2 = () =>{
//    toggleLoadingSpinner(true)  //call korte hobe toggle loading spinner ta ke
//   const searchField2 = document.getElementById('search-field2');
//   const searchText2 = searchField2.value;
//   // console.log(searchText2)
//   loadPhone(searchText2)
// }


const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner')
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden')
  }
}

// handle show all 
const handleShowAll = ()=>{
  handleSearch(true)
  
}


// click the show Details button and open the modal 

 const handleShowDetails = async (id)=>{
  console.log('clicked show details button',id)
  // load single phone data 
 const res = fetch(`https://openapi.programming-hero.com/api/phone/apple_${id}`)
//  const data = await res.json();
//  console.log(data)
const data = (await res).json();
console.log(data)


}

loadPhone()