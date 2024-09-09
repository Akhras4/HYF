class ImgComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        const className = this.getAttribute('class-name') || 'default-class';
        const classImg=this.getAttribute('class')
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
        :host {
                z-index: -5; 
                }
            img {
                width: 90%;
                height: auto;
                max-height: 90vh;
                background-repeat: no-repeat;
                position: relative;
                object-fit: cover;
                border-radius: 30px;
            }
            .imageboxgradient {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 20%;
                background-image: linear-gradient(rgba(17, 5, 44, 0), rgba(17, 5, 44, .82) 47%, rgba(17, 5, 44, .91) 59%, rgba(17, 5, 44, .94) 66%, rgba(17, 5, 44, .98) 75%, #11052c 82%);
                border-radius: 30px;
            }
              .paragraph {
                position: absolute;
                bottom: -3rem;
                left: 0;
                right: 0;
                z-index: 0;
                text-align: center;
                color: white;
                margin: 0;
                width:90%
            }
                .titleText{
                font-size: 2rem;
                overflow:visibel;
                position: absolute;
                left: 0;
                right: 0;
                z-index: 0;
                text-align: center;
                color: white;
                margin: 0;
                width:90%;
                
                }
                .titleParagraphText{
                position: absolute;
                bottom: 3rem;
                left: 0;
                right: 0;
                z-index: 0;
                text-align: center;
                color: #00c7ff;
                margin-bottom: 0;
                width:90%;
                font-size: 1.1rem;
                
                }
                @media screen and (max-width:900px) {
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

        const imgOverlay = document.createElement('img');
        imgOverlay.classList.add('overlay');
        imgOverlay.setAttribute('src', posterSrc);
        imgOverlay.setAttribute('alt', 'Video Overlay');

        const logoSrc = this.getAttribute('logo-src');
        const logo = logoSrc ? document.createElement('img') : null;
        if (logo) {
            logo.classList.add('logo');
            logo.setAttribute('src', logoSrc);
        }

        const companyNameText = this.getAttribute('company-name');
        const companyName = companyNameText ? document.createElement('h2') : null;
        if (companyName) {
            companyName.classList.add('companyName');
            companyName.textContent = companyNameText;
        }

        const imgBg = document.createElement('div');
        imgBg.classList.add('imageboxgradient');

        wrapper.append(video, imgBg, logo, companyName, imgOverlay);
        this.shadowRoot.appendChild(wrapper);

        const style = document.createElement('style');
        style.textContent = `
        
            video {
                width: 90%;
                height: 100%;
                max-height: 100vh;
                min-height: 400px;
                object-fit: cover;
                z-index: 1;
                cursor: pointer;
                border-radius: 30px;
                position: relative;
            }
            .videoComponenthover video {
                cursor: auto;
            }
            .imageboxgradient {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 20%;
                background-image: linear-gradient(rgba(17, 5, 44, 0), rgba(17, 5, 44, .82) 47%, rgba(17, 5, 44, .91) 59%, rgba(17, 5, 44, .94) 66%, rgba(17, 5, 44, .98) 75%, #11052c 82%);
                z-index: 9;
                border-bottom-right-radius: 30px;
            }
            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 90%;
                height: 100%;
                object-fit: cover;
                display: block;
                z-index: 3;
                border-radius: 30px;
                pointer-events: none; 
            }
            .logo {
                position: absolute;
                width:40%;
                height:20%;
                top: 10px;
                left: 10px;
                z-index: 9;
            }
            .companyName {
                position: absolute;
                bottom: 10px;
                left: 0;
                right: 0;
                z-index: 10;
                text-align: center;
                color: white;
                margin: 0;
            }
            @media screen and (max-width:900px) {
                 .videoComponenthover  {
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
