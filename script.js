(function ($) {
  "use strict";

  //Page cursors

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientY + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  //About page

  $(".about-text").on("click", function () {
    $("body").addClass("about-on");
  });
  $(".about-close").on("click", function () {
    $("body").removeClass("about-on");
  });

  //Skill page

  $(".skill-text").on("click", function () {
    $("body").addClass("skill-on");
  });
  $(".skill-close").on("click", function () {
    $("body").removeClass("skill-on");
  });

  //Contact page

  $(".contact-text").on("click", function () {
    $("body").addClass("contact-on");
  });
  $(".contact-close").on("click", function () {
    $("body").removeClass("contact-on");
  });

  //Project page

  $(".project-text").on("click", function () {
    $("body").addClass("project-on");
  });
  $(".project-close").on("click", function () {
    $("body").removeClass("project-on");
  });
})(jQuery);

const projectData = [
  {
    imageURL: "./img/let's flix.PNG",
    name: "Let's Flix Movie Streaming",
    tools: "Node.js, React.js, Ant Design, MongoDB",
    demoURL: "https://lets-flix-front-end-client.vercel.app/",
    codeURL: "https://github.com/ThangNguyenTan/lets-flix-front-end-client",
    tag: "belizehole"
  },
  {
    imageURL: "./img/bookworm.PNG",
    name: "Bookworm Store",
    tools: "Node.js, React.js, Reactstrap, PostgreSQL",
    demoURL: "https://bookworm-app-frontend.vercel.app/",
    codeURL: "https://github.com/ThangNguyenTan/bookworm-app-frontend",
    tag: "belizehole"
  },
  {
    imageURL: "./img/ams.PNG",
    name: "Asset Management System",
    tools: "Node.js, React.js, Reactstrap, PostgreSQL",
    demoURL: "https://asset-management-system-front-end.vercel.app/",
    codeURL: "https://github.com/ThangNguyenTan/asset-management-system-front-end",
    tag: "belizehole"
  },
  {
    imageURL: "./img/work-item-img-1.jpg",
    name: "Fesco",
    tools: "HTML, CSS, Bootstrap",
    demoURL: "https://nguyentanthang.github.io/Web---Restaurant-Fresco/",
    codeURL: "https://github.com/NguyenTanThang/Web---Restaurant-Fresco",
    tag: "alizarin"
  },
  {
    imageURL: "./img/work-item-img-2.jpg",
    name: "Lambda",
    tools: "HTML, CSS, Bootstrap",
    demoURL: "https://nguyentanthang.github.io/Web---Restaurant-Lambda/",
    codeURL: "https://github.com/NguyenTanThang/Web---Restaurant-Lambda",
    tag: "alizarin"
  },
  /*
  {
    imageURL: "./img/work-item-img-3.PNG",
    name: "Montreal",
    tools: "HTML, CSS, JavaScript, Bootstrap",
    demoURL: "https://nguyentanthang.github.io/Web---Digital-Agency-Montreal/",
    codeURL: "https://nguyentanthang.github.io/Web---Digital-Agency-Montreal/",
    tag: "alizarin"
  },
  */
  {
    imageURL: "./img/work-item-img-5.jpg",
    name: "StartupRR",
    tools: "HTML, CSS, JavaScript, Bootstrap",
    demoURL: "https://nguyentanthang.github.io/Web---Digital-Agency-StartupRR/",
    codeURL: "https://github.com/NguyenTanThang/Web---Digital-Agency-StartupRR",
    tag: "alizarin"
  },
  {
    imageURL: "./img/work-item-img-6.jpg",
    name: "Leramiz",
    tools: "HTML, CSS, JavaScript, Bootstrap",
    demoURL: "https://nguyentanthang.github.io/Web---Real-Estate-Leramiz/",
    codeURL: "https://github.com/NguyenTanThang/Web---Real-Estate-Leramiz",
    tag: "alizarin"
  },
  {
    imageURL: "./img/work-item-img-9.PNG",
    name: "Natuspa",
    tools: "HTML, CSS, JavaScript, Bootstrap",
    demoURL: "https://nguyentanthang.github.io/Web---Natuspa/",
    codeURL: "https://github.com/NguyenTanThang/Web---Natuspa",
    tag: "alizarin"
  },
  {
    imageURL: "./img/work-item-img-10.jpg",
    name: "Advocatus",
    tools: "HTML, CSS, JavaScript, Bootstrap",
    demoURL: "https://nguyentanthang.github.io/Web---Advocatus/",
    codeURL: "https://github.com/NguyenTanThang/Web---Advocatus",
    tag: "alizarin"
  },
  {
    imageURL: "./img/work-item-img-16.png",
    name: "Nussli Construction",
    tools: "HTML, CSS, JavaScript",
    demoURL: "https://nguyentanthang.github.io/Front-end---Construction-Company/",
    codeURL: "https://github.com/NguyenTanThang/Front-end---Construction-Company",
    tag: "alizarin"
  },
  /*
  {
    imageURL: "./img/work-item-img-12.PNG",
    name: "Movie Searcher",
    tools: "React.js, OMDB API, Reactstrap",
    demoURL: "https://movie-searcher-omdb.netlify.com/",
    codeURL: "https://github.com/NguyenTanThang/React-JS-Movie-Searcher",
    tag: "alizarin"
  },
  {
    imageURL: "./img/work-item-img-15.PNG",
    name: "LOL Info",
    tools: "React.js, LOL API, Reactstrap",
    demoURL: "https://lol-info.netlify.com/",
    codeURL: "https://github.com/NguyenTanThang/React-JS-LOL-Info",
    tag: "alizarin"
  },
  */
 /*
  {
    imageURL: "./img/work-item-img-14.PNG",
    name: "Pollster",
    tools: "Node.js, Passport.js, Chart.js, Bootstrap",
    demoURL: "https://node-js-pollster.herokuapp.com/login",
    codeURL: "https://github.com/NguyenTanThang/Node-JS-Pollster",
    tag: "belizehole"
  },
  */
  /*
  {
    imageURL: "./img/work-item-img-cms.PNG",
    name: "Course Management System",
    tools: "GraphQL, React.js, Reactstrap, MongoDB",
    demoURL: "https://node-js-sms-frontend-123.herokuapp.com/",
    codeURL: "https://github.com/NguyenTanThang/React-JS-Course-Management-System---Front-End",
    tag: "belizehole"
  },
  */
  /*
  {
    imageURL: "./img/work-item-img-11.PNG",
    name: "Gaming Store",
    tools: "Node.js, React.js, Reactstrap, MongoDB",
    demoURL: "https://reactjs-gamming-store-client-view.netlify.com/",
    codeURL: "https://github.com/NguyenTanThang/React-JS-Gaming-Store-Client",
    tag: "belizehole"
  },
  {
    imageURL: "https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FweatherThumbnail.png%3Falt%3Dmedia%26token%3D7645edd7-df0f-4ea1-9a8c-2bab7fe01431&w=1080&q=75",
    name: "Weather App",
    tools: "React.js, CSS, Weather API",
    demoURL: "https://dev-challenge-weather-app.netlify.app/",
    codeURL: "https://github.com/NguyenTanThang/Dev-Challenge---Weather-App",
    tag: "alizarin"
  },
  {
    imageURL: "https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FCatWikiThumnail.png%3Falt%3Dmedia%26token%3Daaa3deb0-dae2-44c5-b90d-420858c0ca40&w=1080&q=75",
    name: "CatWiki",
    tools: "Node.js, React.js, Cat API",
    demoURL: "https://dev-challenge-cat-wiki.netlify.app/",
    codeURL: "https://github.com/NguyenTanThang/Dev-Challenge---Cat-Wiki-Frontend",
    tag: "belizehole"
  },
  {
    imageURL: "https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FcountryQuizThumbnail.png%3Falt%3Dmedia%26token%3D761f3109-120d-4111-96b3-98ef934281b6&w=1080&q=75",
    name: "Country Quiz",
    tools: "React.js, Quiz API",
    demoURL: "https://country-quiz-dev-challenge.netlify.app/",
    codeURL: "https://github.com/NguyenTanThang/Dev-Challenge---Country-Quiz",
    tag: "belizehole"
  },
  */
]

const projectItemsContainer = document.querySelector(".project-section .row.justify-content-center");

const renderProjectItems = () => {
  projectData.forEach(projectDataItem => {
    const {name, imageURL, tools, demoURL, codeURL, tag} = projectDataItem;

    projectItemsContainer.innerHTML += `
    <div class="work-item box ${tag}">
    <img
      src="${imageURL}"
      alt="" class="img-fluid" />

    <!-- Work Item Desc -->
    <div class="work-item-desc hover-target">
      <h4>${name}</h4>
      <div class="technology">
        <h6>Tools</h6>
        <p>${tools}</p>
      </div>
      <ul>
        <li>
          <a target="_blank" href="${demoURL}">
            <i class="fas fa-link" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="${codeURL}">
            <i class="fas fa-code" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
    `
  })
}

// fake loader
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let progress = 0;
const fakeLoaderInterval = window.setInterval(function () {
  const $lp = $(".loading-progress");
  progress = progress + getRandomArbitrary(10, 25);
  $lp.css("transform", `translateX(${progress}%)`);

  if (progress >= 75) {
    window.clearInterval(fakeLoaderInterval);
    $lp.css("transform", "translateX(100%)");
    setTimeout(
      () => $(".loading").css("transform", "translateY(calc(100% + 10px))"),
      400
    );
  }
}, getRandomArbitrary(100, 500));

renderProjectItems();