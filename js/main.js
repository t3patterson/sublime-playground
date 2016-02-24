"use strict" 


var posts = [{
        title: "Cats are putting our Christmas spirit to shame in 2015",
        shareCount: 753,
        titleImg: "http://lorempixel.com/600/200/city/9",
        author: "Liz Irishkov",
        authorImg: "http://lorempixel.com/200/200/people/9",
        datePublished: Date(2015, 12, 14),
        mainContent: ("Raise your paw if you are PUMPED for the holiday season.\nCats are not exactly famous for their holiday spirit, but it seems that even the grumpiest of critters is not immune to a little Christmas cheer in 2015. Perhaps these cats are just sucking up to Santa Paws for extra catnip in their stockings, or maybe felines have had a true change of heart. Either way, we should all take a tip from these cats that are dominating the Christmas game right meow.      \nBe inspired by the Christmas kitties below, and meowy holidays to you and yours."),
        relatedArticle: "Kind dog-lover knits cheery holiday sweaters for homeless pups",
        topics: ['cats', 'love', 'pets', 'wow']
    }, {
        title: "I love you baby shampoo",
        shareCount: 102,
        titleImg: "./images/cool-cat.jpg",
        titleImg: "http://lorempixel.com/600/200/city/3",
        author: "Billy Tomkins",
        authorImg: "http://lorempixel.com/200/200/people/8",
        datePublished: Date(2015, 12, 16),
        mainContent: ("I have always been an animal lover since I was a little kid. Animals give you unconditional love that humans do not give. They don’t dump you or leave you in the dirt. I love all animals, but I have always had a special love for cats.\nCats are awesome, just look at YouTube! Don’t get me wrong, I like dogs too, and I am in no way putting down dogs. Cats are the best for my lifestyle and me!"),
        relatedArticle: "It is not okay to punch cats",
        topics: ['cats', 'love', 'pets', 'wow']
    }, {
        title: "I've always been deeply passionate about nature",
        shareCount: 28,
        titleImg: "http://lorempixel.com/600/200/nature/2",
        author: "Jessica Ruiz",
        authorImg: "http://lorempixel.com/200/200/people/1",
        datePublished: Date(2015, 12, 10),
        mainContent: ("You go buy a tape recorder and record yourself for a whole day. I think you'll be surprised at some of your phrasing. However, she mistook the drowsy eye alcohol warning for a winking eye alcohol suggestion. Are all the guys in here… you know? George Sr.: No, not all of them. Barry: Yeah. It's never the ones you hope. There's unlimited juice? This party is gonna be off the hook. Popcorn shrimp… with club sauce. \nShe's a contestant. It's sorta like an inner beauty pageant. Ah, there it is.\nNo, I was ashamed to be SEEN with you. I like being with you. Te quiero. English, please. I love you! Great, now I'm late. They frame my junk. I thought the two of us could talk man-on-man. Yo quiero leche."),
        relatedArticle: "Don't even think about buying a cot when you go camping",
        topics: ['nature', 'extreme', 'watercooler', 'opinion', 'thoughts']
    }
]

function formatDate(dateStr) {
    var months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    var d = new Date(dateStr)
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}


// But before I go, I must say this...
// Synth offal readymade hella polaroid street art gentrify. Viral master cleanse venmo cred pop-up. 
//  Hashtag pug DIY next level, messenger bag keytar post-ironic gochujang brunch pickled. PBR&B try-hard butcher fashion axe locavore austin. 
//  Neutra kale chips plaid, 8-bit letterpress iPhone bitters blue bottle tofu mixtape tote bag health goth chartreuse jean shorts. +1 asymmetrical kombucha letterpress. 
// Master cleanse mixtape tacos, quinoa poutine biodiesel vice actually art party blue bottle hella kitsch iPhone knausgaard.
// Cray everyday carry poutine, man bun gentrify scenester street art PBR&B mlkshk ugh locavore selvage. Irony put a bird on it messenger bag mixtape. 
// Deep v banjo truffaut godard yuccie kickstarter, farm-to-table tattooed. Synth ramps literally craft beer neutra poutine. PBR&B fanny pack keytar, +1 ethical disrupt chicharrones celiac church-key artisan letterpress locavore green juice. 
// Godard stumptown gochujang, synth XOXO gluten-free fixie tofu selfies pork belly taxidermy distillery. 
// Quinoa drinking vinegar bushwick godard, four loko cold-pressed flexitarian kitsch bitters squid skateboard master cleanse farm-to-table bespoke marfa.


function createTemplate(p) {
    return `
    <div class="blog-post">
      <div class="title-area">
        <h1>${p.title}</h1>
        
        <div class="social">
          <div class="share-count">
            <div class="number">${p.shareCount}</div>
            <div class="text">shares</div>
          </div>  
          <button class='share-fb'>
            FB Share</button>
          <button class='share-tw'>
            TW Share
          </button>
          <button class='more'>+</button>
        </div>
        
        <div class="post-img">
          <img src="${p.titleImg}" alt="ok">
        </div>
      </div>
            
     
      <div class="article-area">
        <div class="author-info">
          <div>
            <h5 class="name">BY ${p.author.toUpperCase()}</h5>
            <h5 class="publish-date">${formatDate(p.datePublished)  }</h5>
          </div>
          <img src="${p.authorImg}" alt="girl">
        </div>
          
        <div class="main-content">
         <p>${p.mainContent.split('\n').join("</p><p>")}</p>
        </div>
        <p class="related-article">
          <strong>SEE ALSO:</strong> <a href="#">${p.relatedArticle}</a>
        </p>
       <p class="topics">
        <strong>TOPICS</strong>
        ${ p.topics.map(function(t){
            return"<a href='#'>"+t.toUpperCase()+"</a>"
           }).join("")
         }
      </p>
    </div>
    
    <hr>
  </div>
  `
}

var content = posts.map(function(post) {

    return createTemplate(post)

}).join("")

document.querySelector('section').innerHTML = content
