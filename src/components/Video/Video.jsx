import React from "react";

const Video = () => {
  return (
    <div>
      <h2 className="text-center text-secondary mt-5 mb-3">Here you can get all our famous recipe videos</h2>
      <p className="text-center text-muted  mb-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem <br /> perspiciatis quia
        cupiditate voluptatum repudiandae officia.
      </p>
      <div className="d-flex gap-3 justify-content-between">
        <div>
          <h3 className="my-4">1. How to make kung pao chicken?</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_QWXjebXiWk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h3 className="my-4">2. How to make Mapo Tofu?</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KpnLLhBVIjk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="d-flex gap-3 justify-content-between">
        <div>
          <h3 className="my-4">3. How to make Dumplings?</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_g_9UXRdWWQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h3 className="my-4">4. How to make Hot and Sour Soup?</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/q0h1aOebTgw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="text-center">
        <h3 className="my-4">5. How to make Sweet and Sour Pork ?</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6xgapMla7LQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
