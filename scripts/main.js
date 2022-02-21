async function apiCall(url) {

    try{
        let res = await fetch(url);

        let data = await res.json();
        return data;
    }
    catch(err){
        console.log("err",err);
    }
    //add api call logic here


}


function appendArticles(articles, main) {
    articles.forEach((elem)=>{

        let card = document.createElement("div");
        card.setAttribute("class","card");

        let image = document.createElement("img");
        image.src = elem.urlToImage;
        image.setAttribute("class","image");

        let head = document.createElement("h3");
        head.innerHTML = elem.source.name;
        head.setAttribute("class","head");

        let p = document.createElement("p");
        p.innerHTML = elem.title;
        p.setAttribute("class","p")

        card.append(image,head,p);

        card.onclick = ()=>{
            localStorage.setItem("article",JSON.stringify(elem));
            window.location.href = "news.html";
        }
        main.append(card);
        

    })
    //add append logic here

}

export { apiCall,appendArticles}