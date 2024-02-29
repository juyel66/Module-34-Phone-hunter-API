const loadPhone = async(searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data =await res.json();
    const phones = data.data
    // console.log(phone)
    displayPhone(phones)

}

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container');
    // clear phone container cards before adding new cards 
    phoneContainer.textContent= '';
  // ডিস্প্লে তে যদি ১২ টার বেশি ফোন আসে তাহলে নিচের কন্ডিশন চেক করে শো ওল বাটন শো করবে 
  const showAllContainer = document.getElementById('show-all-container')
  if(phones.length>12){
    showAllContainer.classList.remove('hidden')
  }
  else{
    showAllContainer.classList.add('hidden');
  }
  
    // clear end
    // search limit bellow 
    phones = phones.slice(0,12);

    // console.log(phones)
    phones.forEach(phone => {
        console.log(phone)
        //step-2: create a div 
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card card-compact p-4 bg-gray-100  shadow-xl`;
        // step-3: innerHTML
        phoneCard.innerHTML= `      <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
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

const handleSearch = () =>{
  toggleLoadingSpinner(true)
    const searchField = document.getElementById('search-field');
   const searchText =searchField.value;
  //  console.log(searchText) 
   loadPhone(searchText)
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

// loadPhone()