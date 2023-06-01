const bookURL = "https://yif-library-be.onrender.com/book"

const bookSection = document.querySelector(".viewBook");

async function getBook() {
    try {
        let res = await fetch(bookURL);
        let data = await res.json();
        console.log(data);
        renderData(data);
    } catch (err) {
        console.log(err.message);
    }
}
getBook();

function renderData(books) {
    bookSection.innerHTML = "";

    bookSection.innerHTML = `
        ${books.map((el,index)=>{
            return `
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqbd5hH6jYX37N6BCQIIM5DqASiVkQ-AN1ZtSsxIi-n7qVYkFBEF93F976EsbGuRrpew&usqp=CAU" alt="">
                <h4><strong>Title</strong> : ${el.bookName}</h4>
                <h4><strong>Author</strong> : ${el.authorName}</h4>
            </div>
            `
        }).join(" ")}
    `
}