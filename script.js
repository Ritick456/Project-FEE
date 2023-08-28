let data = [
  {
    id: "1",

    desc: "Good morning  ",
    img: "images/feed-image-1.png",
  },

];

const contentEL = document.getElementById("content");


function render() {
  contentEL.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    contentEL.innerHTML += `
    <div class="post-container">
    <div class="post-row">
    <div class="user-profile">
    <img src="images/profile-pic.png" alt="">
    <div>
    <p>John Nicholson</p>
    <span>June 24 2023, 13:33 pm</span>
    </div>
    </div>
    <button class="fasbtn">
    <i class="fa-solid fa-xmark"></i>
    </button>
    </div>
    
    <p class="post-text">${data[i].desc}</a>
    
    </p>
    <img src="${data[i].img}" class="post-img">
    <div class="post-row">
    <div class="activity-icons">
    <div><img src="images/like-blue.png" alt="">120</div>
    <div><img src="images/comments.png" alt="">50</div>
    <div><img src="images/share.png" alt="">20</div>
    
    </div>
    <div class="post-profile-icon">
    <img src="images/profile-pic.png" alt=""> <i class="fas fa-caret-down"></i>
    </div>
    </div>
    
    </div> 
    
    `;
  }


}



let newarray = data;
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  data = [];
  const formData = new FormData(event.target);

  let formDataObj = Object.fromEntries(formData.entries());
  data = newarray;
  // Convert the form data to JSON
  data.push(formDataObj);

  console.log(data);

  render();

  const deletebtn = document.querySelectorAll(".fasbtn");

  deletebtn.forEach((element) => {
    element.addEventListener("click", function (e) {
      

      let ele = e.currentTarget.parentElement.parentElement;
      contentEL.removeChild(ele);
    });
  });

});

render();
