class ImgComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        const className = this.getAttribute('class-name') || 'default-class';
        wrapper.classList.add(className);

 
        const image = document.createElement('img');
        const imgSrc = this.getAttribute('src') || 'default.jpg'; 
        image.setAttribute('src', imgSrc);
        image.alt = 'Image component'; 


        const imgBg = document.createElement('div');
        imgBg.classList.add('imageboxgradient');


        wrapper.append(image, imgBg);


        this.shadowRoot.appendChild(wrapper);

        const style = document.createElement('style');
        style.textContent = `
              img {
                width: 90%;
                height: auto;
                max-height:90vh;
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

        // Create and configure the video element
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
        const imgBg = document.createElement('div');
        imgBg.classList.add('imageboxgradient');
        wrapper.append(video, imgBg);
        this.shadowRoot.appendChild(wrapper);

        const style = document.createElement('style');
        style.textContent = `
            video {
                width: 90%;
                height: 100%;
                max-height:100vh;
                object-fit: cover; /* Ensure video covers the space without overflow */
                z-index: -1; /* Keep the video on top */
                cursor: pointer;
                border-radius: 30px;
            }
            .imageboxgradient {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 20%;
                background-image: linear-gradient(rgba(17, 5, 44, 0), rgba(17, 5, 44, .82) 47%, rgba(17, 5, 44, .91) 59%, rgba(17, 5, 44, .94) 66%, rgba(17, 5, 44, .98) 75%, #11052c 82%);
                z-index: 2; /* Ensure the gradient is on top of the video */
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
                }
        `;
        this.shadowRoot.appendChild(style);
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
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
