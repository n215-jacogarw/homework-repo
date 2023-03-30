var homeContent = `<div class="hero">
        <h2>ROCKFEST 2023</h2>
       
    </div>
    <div class="header">
        <h1>The biggest event in rock history!</h1>
    </div>
    <div class="app">
    <div class="body">
        <br>
        <br>
    <div id="box1">
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, necessitatibus. Placeat reiciendis mollitia obcaecati beatae deleniti nulla consequuntur provident enim molestias ipsum, ipsam dolore a veniam facilis dicta atque exercitationem voluptates ipsa ex aspernatur eum, quas cumque perspiciatis consequatur! Asperiores ea consequatur praesentium iure animi at veritatis, consequuntur aliquid ab laborum tenetur perspiciatis, dolorem nisi corrupti. Saepe nihil, fugiat rem dolore, eveniet numquam at, reiciendis dolorem architecto quaerat reprehenderit modi earum odit dolores sunt delectus! Porro accusantium assumenda recusandae perferendis eos magnam? Cupiditate fugit praesentium minima omnis delectus distinctio aut, animi officiis at incidunt cumque ab perferendis aliquid sunt quidem ratione, itaque dolores nihil earum optio iusto alias. Accusantium enim earum eos eius modi aspernatur id, in tenetur? Dolorum reiciendis neque est, reprehenderit hic quisquam esse qui, facere optio, ipsum quidem harum dignissimos! Voluptates debitis accusantium id facilis quo qui, accusamus sapiente quae aliquid! Magni, suscipit porro! Debitis nostrum eum reprehenderit commodi odit mollitia fugiat amet eligendi dolorem praesentium! Voluptate iusto fuga ipsum doloremque tempora, provident eaque recusandae libero praesentium sequi inventore perspiciatis quis eveniet natus molestiae corporis dolorem commodi labore ut laboriosam placeat repellat? Facilis quas quo omnis totam dolores mollitia provident non in vitae, molestiae placeat dolorem assumenda obcaecati, cupiditate velit ad quos voluptatem, cumque exercitationem nostrum vero.
       </p>
        <div id="Band1"></div>
    </div>
    <div id="filler1">
        <p>I went last year, and it was the worst time of my life. I can't wait to go again!<br>-Jimmy Placeholder</p>
    </div>
    <div id="box2">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, necessitatibus. Placeat reiciendis mollitia obcaecati
        beatae deleniti nulla consequuntur provident enim molestias ipsum, ipsam dolore a veniam facilis dicta atque
        exercitationem voluptates ipsa ex aspernatur eum, quas cumque perspiciatis consequatur! Asperiores ea consequatur
        praesentium iure animi at veritatis, consequuntur aliquid ab laborum tenetur perspiciatis, dolorem nisi corrupti. Saepe
        nihil, fugiat rem dolore, eveniet numquam at, reiciendis dolorem architecto quaerat reprehenderit modi earum odit
        dolores sunt delectus! Porro accusantium assumenda recusandae perferendis eos magnam? Cupiditate fugit praesentium
        minima omnis delectus distinctio aut, animi officiis at incidunt cumque ab perferendis aliquid sunt quidem ratione.
    </p>
   <img src="./img/Band2.png" id="band2">
    </div>
</div>`
var lineupContent = `
<div class="lineup">
        <div id="lineupbody">
            <div id="lineup">
            <p>Bands Confirmed for Rockfest 2023:</p>
            <ul>
                <br>
                <li>Lorem Ipsum</li>
                <li><img src="./img/LoremIpsumBand.png"></li>
                <li>Dolor</li>
                <li><img src="./img/DolorBand.png"></li>
                <li>Sit Amet Consectetur</li>
                <li><img src="./img/SitAmetBand.png"></li>
                <li>and announcing new Special Guest...</li>
                <br>
                <li id="specialguest">Itaque</li>
                <li><img src="./img/ItaqueBand.png"></li>
                <br>
                <li>Stay tuned for more band announcements!</li>
            </ul>
            </div>
        </div>
    </div>
 `
var productsContent = `<div class="products">
        <h1> OUR PRODUCTS</h1>
        <h2>We Have:</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id a, alias quis iusto nam eveniet, ex recusandae ratione corporis facere quisquam dicta ea consectetur dolor illo in error quo eius et? Aliquam accusamus labore, animi officiis tempore, enim totam ducimus ut eligendi quia repudiandae beatae ea omnis ad? Voluptas inventore excepturi, fugit totam iste, pariatur alias, consectetur ea quia maiores et nulla minima facere dolor voluptatum porro sed amet dolorum corrupti consequatur animi! Nulla exercitationem praesentium dicta quam excepturi veritatis eius nemo inventore sit possimus. Quae quasi nam aliquid quo ducimus voluptatum eius aspernatur quos animi, dignissimos esse provident id.</p>
        <div class="productimg"></div>
    </div>`
    var contactContent = `<div class="contact">
    <h1>Contact Us</h1>
    <h2>You can contact us by:
        <li>Calling Us</li>
        <li>Emailing Us</li>
        <li>Screaming at our receptionist Kevin (don't do that)</li>
        and new!
        <li>You can use our text hotline to tell us what we did wrong from anywhere!</li>
        <div class="kevinpic" alt="Our wonderful receptionist Kevin"></div>
    </h2>
    </div>
    
    `
function initListeners() {
    let btnID;

 $("nav a").on("click", function(e){
        btnID= e.currentTarget.id;
        pageContentID= btnID + "Content";
        
        changePageContent(pageContentID);
    });
 $(".footer a").on("click", function(e){
        btnID= e.currentTarget.id;
        pageContentID= btnID + "Content";
        
        changePageContent(pageContentID);
    });
   
}



function changePageContent(pageContentVarName) {
     $("#app").html(eval(pageContentVarName));
}

$(document).ready(function() {
    changePageContent("homeContent");
    initListeners();

});