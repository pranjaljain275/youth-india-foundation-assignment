const bookURL = "https://yif-library-be.onrender.com/book";

const bookSection = document.querySelector(".viewBook");

let booksData = [];

async function getBook() {
  try {
    let res = await fetch(bookURL);
    let data = await res.json();
    booksData = data;
    renderData(data);
  } catch (err) {
    console.log(err.message);
  }
}
getBook();

function renderData(books) {
  bookSection.innerHTML = "";

  bookSection.innerHTML = `
        ${books
          .map((el, index) => {
            return `
            <div class="eachBook" data-id=${el._id}>
                <img data-id=${el._id} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqbd5hH6jYX37N6BCQIIM5DqASiVkQ-AN1ZtSsxIi-n7qVYkFBEF93F976EsbGuRrpew&usqp=CAU" alt="">
                <h4 data-id=${el._id}><strong data-id=${el._id}>Title</strong> : ${el.bookName}</h4>
                <h4 data-id=${el._id}><strong data-id=${el._id}>Author</strong> : ${el.authorName}</h4>
            </div>
            `;
          })
          .join(" ")}
    `;

  let allbook = document.querySelectorAll(".eachBook");
  for (let book of allbook) {
    book.addEventListener("click", (event) => {
      let ids = event.target.dataset.id;
      let eachdata = booksData.filter((el, index) => {
        return el._id == ids;
      });

      localStorage.setItem("book", JSON.stringify(eachdata));
      window.location.href = "bookview.html";
    });
  }
}
