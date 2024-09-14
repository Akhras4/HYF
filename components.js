class ImgComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        const className = this.getAttribute('class-name') || 'default-class';
        const classImg = this.getAttribute('class');
        wrapper.classList.add(className);

        const image = document.createElement('img');
        const imgSrc = this.getAttribute('src') || 'default.jpg'; 
        image.setAttribute('src', imgSrc);
        image.alt = 'Image component'; 

        const imgBg = document.createElement('div');
        imgBg.classList.add('imageboxgradient');

        const titleParagraphText = this.getAttribute('titlePargraph');
        const titleParagraph = titleParagraphText ? document.createElement('p') : null;
        if (titleParagraph) {
            titleParagraph.classList.add('titleParagraphText');
            titleParagraph.textContent = titleParagraphText;
        }

        const titleText = this.getAttribute('title');
        const title = titleText ? document.createElement('h1') : null;
        if (title) {
            title.classList.add('titleText');
            title.textContent = titleText;
            if (classImg === 'videoComponent1 team') {
                title.style.bottom = '0rem';
            } else {
                title.style.bottom = '3rem';
            }
        }

        const paragraphText = this.getAttribute('paragraph');
        const paragraph = paragraphText ? document.createElement('h3') : null;
        if (paragraph) {
            paragraph.classList.add('paragraph');
            paragraph.textContent = paragraphText;
        }

        wrapper.append(image, imgBg);
        if (titleParagraph) wrapper.appendChild(titleParagraph);
        if (title) wrapper.appendChild(title);
        if (paragraph) wrapper.appendChild(paragraph);

        this.shadowRoot.appendChild(wrapper);

        const style = document.createElement('style');
        style.textContent = `
            img {
                width: 90%;
                height: auto;
                max-height: 90vh;
                background-repeat: no-repeat;
                position: relative;
                object-fit: cover;
                border-radius: 30px;
                z-index: var(--image-z-index, 0); 
            }
            .imageboxgradient {
                width: 90%;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 20%;
                z-index: var(--imageboxgradient-z-index, 9); 
                background-image: linear-gradient(rgba(17, 5, 44, 0), rgba(17, 5, 44, .82) 47%, rgba(17, 5, 44, .91) 59%, rgba(17, 5, 44, .94) 66%, rgba(17, 5, 44, .98) 75%, #11052c 82%);
                border-radius: 30px;
            }
            .paragraph {
                position: absolute;
                bottom: -3rem;
                left: 0;
                right: 0;
                z-index: var(--paragraph-z-index, 10); /* Using CSS variable */
                text-align: center;
                color: white;
                margin: 0;
                width: 90%;
            }
            .titleText {
                font-size: 2rem;
                position: absolute;
                left: 0;
                right: 0;
                z-index: var(--titleText-z-index, 0); /* Using CSS variable */
                text-align: center;
                color: white;
                margin: 0;
                width: 90%;
            }
            .titleParagraphText {
                position: absolute;
                bottom: 3rem;
                left: 0;
                right: 0;
                z-index: var(--titleParagraphText-z-index, 0); /* Using CSS variable */
                text-align: center;
                color: #00c7ff;
                margin-bottom: 0;
                width: 90%;
                font-size: 1.1rem;
            }
            @media screen and (max-width: 900px) {
                img {
                    width: 100%;
                }
            }
        `;
        this.shadowRoot.appendChild(style);
    }
}

customElements.define('image-component', ImgComponent);







class VideoCell extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        const className = this.getAttribute('class-name') || 'default-class';
        wrapper.classList.add(className);

        // Video element
        const video = document.createElement('video');
        const videoSrc = this.getAttribute('video-src') || 'default.mp4';
        const posterSrc = this.getAttribute('poster-src') || 'default.jpg';

        video.setAttribute('autoplay', '');
        video.setAttribute('loop', '');
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');

        const source = document.createElement('source');
        source.setAttribute('src', videoSrc);
        source.setAttribute('type', 'video/mp4');
        video.appendChild(source);

        // Image overlay
        const imgOverlay = document.createElement('img');
        imgOverlay.classList.add('overlay');
        imgOverlay.setAttribute('src', posterSrc);
        imgOverlay.setAttribute('alt', 'Video Overlay');

        // Optional logo
        const logoSrc = this.getAttribute('logo-src');
        const logo = logoSrc ? document.createElement('img') : null;
        if (logo) {
            logo.classList.add('logo');
            logo.setAttribute('src', logoSrc);
        }

        // Optional company name
        const companyNameText = this.getAttribute('company-name');
        const companyName = companyNameText ? document.createElement('h2') : null;
        if (companyName) {
            companyName.classList.add('companyName');
            companyName.textContent = companyNameText;
        }

        // Gradient background
        const imgBg = document.createElement('div');
        imgBg.classList.add('imageboxgradient');

        // Append elements
        wrapper.append(video, imgBg, logo, companyName, imgOverlay);
        this.shadowRoot.appendChild(wrapper);

        // CSS with z-index variables
        const style = document.createElement('style');
        style.textContent = `
            :host {
                --z-index-video: 1;
                --z-index-overlay: 3;
                --z-index-gradient: 9;
                --z-index-logo: 9;
                --z-index-company-name: 10;
            }

            video {
                width: 90%;
                height: 100%;
                max-height: 100vh;
                min-height: 400px;
                object-fit: cover;
                z-index: var(--z-index-video);
                cursor: pointer;
                border-radius: 30px;
                position: relative;
            }

            .imageboxgradient {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                width: 90%;
                height: 20%;
                background-image: linear-gradient(rgba(17, 5, 44, 0), rgba(17, 5, 44, .82) 47%, rgba(17, 5, 44, .91) 59%, rgba(17, 5, 44, .94) 66%, rgba(17, 5, 44, .98) 75%, #11052c 82%);
                z-index: var(--z-index-gradient);
                border-bottom-right-radius: 30px;
                border-bottom-left-radius: 30px;
            }

            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 90%;
                height: 100%;
                object-fit: cover;
                display: block;
                z-index: var(--z-index-overlay);
                border-radius: 30px;
                pointer-events: none;
            }

            .logo {
                position: absolute;
                width: 40%;
                height: 20%;
                top: 10px;
                left: 10px;
                z-index: var(--z-index-logo);
            }

            .companyName {
                position: absolute;
                bottom: 10px;
                left: 0;
                right: 0;
                z-index: var(--z-index-company-name);
                text-align: center;
                color: white;
                margin: 0;
            }

            @media screen and (max-width: 900px) {
                .videoComponenthover {
                    height: 100%;
                }
            }
        `;
        this.shadowRoot.appendChild(style);

        const handleEvent = (event) => {
            if (event.type === 'mouseover' || event.type === 'click') {
                if (video.paused) {
                    video.play();
                    imgOverlay.style.display = 'none'; 
                }
            } else if (event.type === 'mouseout') {
                if (!video.paused) {
                    video.pause();
                    imgOverlay.style.display = 'block';
                }
            }
        };

        const eventType = className === "videoComponenthover" ? "mouseover" : "click";
        video.addEventListener(eventType, handleEvent);

        if (className === "videoComponenthover") {
            video.addEventListener("mouseout", handleEvent);
        }

        if (video.paused) {
            imgOverlay.style.display = 'block'; 
        }
    }
}

customElements.define('video-cell', VideoCell);




class Testside extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        const className = this.getAttribute('class-name') || 'default-class';
        wrapper.classList.add(className);

        const style = document.createElement('style');
        style.textContent = `
            .titleParagraph{
               color: red;
              
            }
               p{
                font-size:clamp(0.9rem, 1.2rem, 1.4rem);
               word-spacing:1px
               }
        `;
        this.shadowRoot.appendChild(style);

        const titleParagraph = document.createElement('p');
        const titleTextParagraph = this.getAttribute('titleTextPargraph') ;
        const titleTextParagraphClassName=titleParagraph.setAttribute('class','titleParagraph')
        titleTextParagraph ?(titleParagraph.textContent = titleTextParagraph) :null

        
        const title = document.createElement('h1');
        const titleText = this.getAttribute('titleText') || 'Default Title';
        title.textContent = titleText;

        wrapper.appendChild(titleParagraph); 
        wrapper.appendChild(title);

        const descriptionText = this.getAttribute('descriptionText');
        let descriptions = [];

        try {
            descriptions = JSON.parse(descriptionText) || [];
        } catch (error) {
            console.error('Invalid JSON format for descriptionText:', error);
        }
        descriptions.forEach(text => {
            const description = document.createElement('p');
            description.textContent = text;
            wrapper.appendChild(description);
        });
        this.shadowRoot.appendChild(wrapper);
    }
}


customElements.define('test-side', Testside);

class VideoBarTitle  extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const wrapper = document.createElement('div');
        const className = this.getAttribute('class-name') || 'default-class';
        wrapper.classList.add(className);

        const titleParagraph = document.createElement('p');
        const titleTextParagraph = this.getAttribute('titleTextPargraph') ;
        const titleTextParagraphClassName=titleParagraph.setAttribute('class','titleParagraph')
        titleTextParagraph ?(titleParagraph.textContent = titleTextParagraph) :null

        
        const title = document.createElement('h1');
        const titleText = this.getAttribute('titleText') || 'Default Title';
        title.textContent = titleText;

        wrapper.appendChild(titleParagraph); 
        wrapper.appendChild(title);
        this.shadowRoot.appendChild(wrapper);
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: flex;
                margin: 16px;
                align-items: center;
                justify-content: center;
                
            }
            .titleParagraph {
                font-size: 1.4rem;
                color: #ffffff; 
                margin-bottom: 8px;
                text-align:center;
            }
            h1 {
                font-size: 3rem;
                color: #ffffff; 
                border: 2px solid #ffffff; 
                padding: 10px;
                background: rgba(0, 0, 0, 0.5);   
                position: relative;
                overflow: hidden;
                
            }
            h1::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(to right, transparent 50%, #000000 50%);
                z-index: -1;
                
            }
        `;
        this.shadowRoot.appendChild(style);
    }
}
customElements.define('video-bar-title', VideoBarTitle );



  // MobileNavbar.js
class MobileNavbar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
      this.addEventListeners();
    }
  
    render() {
        this.shadowRoot.innerHTML = `
        <style>
  
          .navbar-container {
            position: relative;
            display: none;
          }
  
          .open-nav-button {
            position: fixed;
            top: 10px;
            right: 4px;
            z-index: var(--z-index-nav-button);
            cursor: pointer;
            color: white;
            height: 20vh;
            overflow: hidden;
            transition: height var(--nav-transition-duration) ease;
          }
  
          .button-content {
            background: white;
            width: 3.5rem;
            height: 3.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
          }
  
          .bar {
            width: 1.75rem;
            height: 2px;
            background: black;
          }
  
          .nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            z-index: var(--z-index-nav-overlay);
            transition: height 0.7s ease-in-out;
            background-color: var(--nav-bg-color);
            overflow: hidden;
          }
  
          .nav-overlay.active {
            height: 100vh;
            z-index: var(--z-index-nav-overlay) !important;
          }
  
          .close-nav {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 4rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0 1rem;
            cursor: pointer;
          }
  
          .close-text {
            color: var(--nav-text-color);
            font-size: 1rem;
          }
  
          .close-icon {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
  
          .line {
            width: 1.375rem;
            height: 2px;
            background: white;
            transition: transform var(--nav-transition-duration) ease-in-out;
          }
  
          .line-1 {
            transform: rotate(45deg) translateY(5px);
          }
  
          .line-2 {
            transform: rotate(-45deg) translateY(-5px);
          }
  
          .nav-menu {
            margin-top: 2.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
  
          .dropdown {
            width: 100%;
          }
  
          .dropdown-title {
            padding: 0.75rem 1.5rem;
            width: 100%;
            background: var(--nav-dropdown-bg-color);
            color: var(--nav-text-color);
            font-size: 1rem;
            border-radius: 9999px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            transition: background var(--nav-transition-duration) ease;
          }
  
          .dropdown-title:hover {
            background: var(--nav-hover-color);
          }
  
          .dropdown-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease-in-out;
          }
  
          .dropdown-content.active {
            max-height: 200px; /* Adjust as needed for dropdown content */
          }
  
          .dropdown-content a {
            display: block;
            padding: 0.75rem 1.5rem;
            width: 100%;
            background: var(--nav-dropdown-bg-color);
            color: var(--nav-text-color);
            border-radius: 9999px;
            text-decoration: none;
            transition: background var(--nav-transition-duration) ease;
          }
  
          .dropdown-content a:hover {
            background: var(--nav-hover-color);
          }
  
          .nav-link {
            padding: 0.75rem 1.5rem;
            width: 100%;
            background: var(--nav-dropdown-bg-color);
            color: var(--nav-text-color);
            font-size: 1rem;
            border-radius: 9999px;
            text-decoration: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background var(--nav-transition-duration) ease;
          }
  
          .nav-link:hover {
            background: var(--nav-hover-color);
          }
  
          @media (max-width: 1023px) {
            .navbar-container {
              display: block;
            }
          }
        </style>
        <div class="navbar-container">
          <div class="open-nav-button">
            <div class="button-content">
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
          </div>
          <div class="nav-overlay" id="nav-overlay">
            <div class="close-nav">
              <span class="close-text">sluiten</span>
              <div class="close-icon">
                <span class="line line-1"></span>
                <span class="line line-2"></span>
              </div>
            </div>
            <nav class="nav-menu">
              <div class="dropdown">
                <div class="dropdown-title" data-dropdown="diensten">
                  diensten
                  <svg class="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M5.70711 4.29289L10 1.68643e-08C10 1.68642e-08 11.4142 1.41421 11.4142 1.41421L6.41422 6.41421C6.21785 6.61058 5.70711 7.13591 5.70711 7.13591C5.70711 7.13591 5.19416 6.60838 5 6.41421L1.92421e-06 1.41421C1.92421e-06 1.41421 1.41422 1.19249e-07 1.41422 1.19249e-07L5.70711 4.29289Z" fill="white"></path>
                  </svg>
                </div>
                <div class="dropdown-content" id="dropdown-diensten">
                  <a href="/thema/">Uitdagingen</a>
                  <a href="/thema/digitale-transformatie/">digitale transformatie</a>
                </div>
              </div>
              <div class="dropdown">
                <div class="dropdown-title" data-dropdown="over-ons">
                  over ons
                  <svg class="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M5.70711 4.29289L10 1.68643e-08C10 1.68642e-08 11.4142 1.41421 11.4142 1.41421L6.41422 6.41421C6.21785 6.61058 5.70711 7.13591 5.70711 7.13591C5.70711 7.13591 5.19416 6.60838 5 6.41421L1.92421e-06 1.41421C1.92421e-06 1.41421 1.41422 1.19249e-07 1.41422 1.19249e-07L5.70711 4.29289Z" fill="white"></path>
                  </svg>
                </div>
                <div class="dropdown-content" id="dropdown-over-ons">
                  <a href="/over-ons/">over ons</a>
                </div>
              </div>
              <a href="/work-hard-play-harder/" class="nav-link">jobs</a>
              <a href="/contact/" class="nav-link">contact</a>
            </nav>
          </div>
        </div>
      `;
    }
  
    addEventListeners() {
        this.shadowRoot.querySelector('.open-nav-button').addEventListener('click', () => {
          this.openNav();
        });
        this.shadowRoot.querySelector('.close-nav').addEventListener('click', () => {
          this.closeNav();
        });
        this.shadowRoot.querySelectorAll('.dropdown-title').forEach(title => {
          title.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.dropdown;
            this.toggleDropdown(id);
          });
        });
      }
    
      openNav() {
        this.shadowRoot.querySelector('.nav-overlay').classList.add('active');
      }
    
      closeNav() {
        this.shadowRoot.querySelector('.nav-overlay').classList.remove('active');
      }
    
      toggleDropdown(id) {
        const content = this.shadowRoot.getElementById(`dropdown-${id}`);
        if (content) {
          content.classList.toggle('active');
        }
      }
    }
    


    customElements.define('mobile-navbar', MobileNavbar);
    

let timeleave; 

document.querySelector('#diensten').addEventListener('mouseenter', () => {
    document.querySelector('.menue-display').style.display = 'block';
    clearTimeout(timeleave); 
});

document.querySelector('.menue-display').addEventListener('mouseenter', () => {
    document.querySelector('.menue-display').style.display = 'block';
    clearTimeout(timeleave); 
});

document.querySelector('#diensten').addEventListener('mouseleave', () => {
    timeleave = setTimeout(() => {
        document.querySelector('.menue-display').style.display = 'none';
    }, 100); 
});

document.querySelector('.menue-display').addEventListener('mouseleave', () => {
    timeleave = setTimeout(() => {
        document.querySelector('.menue-display').style.display = 'none';
    }, 100); 
});
let timeleaveJoin; 

document.querySelector('#join-liik').addEventListener('mouseenter', () => {
    document.querySelector('.unorder-list-join').style.display = 'block';
    clearTimeout(timeleaveJoin); 
});

document.querySelector('.unorder-list-join').addEventListener('mouseenter', () => {
    document.querySelector('.unorder-list-join').style.display = 'block';
    clearTimeout(timeleaveJoin); 
});

document.querySelector('#join-liik').addEventListener('mouseleave', () => {
    timeleaveJoin = setTimeout(() => {
        document.querySelector('.unorder-list-join').style.display = 'none';
    }, 100); 
});

document.querySelector('.unorder-list-join').addEventListener('mouseleave', () => {
    timeleaveJoin = setTimeout(() => {
        document.querySelector('.unorder-list-join').style.display = 'none';
    }, 100); 
});


const nodelist = document.querySelectorAll('.videoComponent1')
        console.log(nodelist)
        nodelist.forEach((node, index) => {
            node.style.alignSelf = index % 2 ? 'flex-end' : 'flex-start';

        })
        const nodelistExpertises = document.querySelectorAll('.videoComponent1.Expertises')
        console.log(nodelistExpertises)
        nodelistExpertises.forEach((node, index) => {
            node.style.alignSelf = index % 2 ? 'center' : 'flex-start';

        })