<template>
  <div class="about">
    <div class="our-mission-div flex">
      <div class="our-mission">Our Mission</div>
      <p>Ever had a wonderful question? Why not ask the whole world? <br> We started a jurney 3 months ago deciding to create a platform that will allow anyone - anywhere, to create and share online surveys - and host a live result platform for him for free. It doesn't matter if you are a twitch streamer with millions of viewers trying to figure out what game to play next, if you are a country trying to decide if they want to go to war - it doesn't matter - AskEm Platform are here to help you out figure it all out. ps: we don't discriminate, burger or pizza surveys are also cool ;)</p>
    </div>
    <ul class="about-details flex clean-list">
      <li>
        <div class="heading">100M</div>
        <p>Users Around The World</p>
      </li>
      <li>
        <div class="heading">150K</div>
        <p>Surveys Uploaded</p>
      </li>
      <li>
        <div class="heading">10K</div>
        <p>Partners Uses Our Services</p>
      </li>
    </ul>
    <img class="our-mission-img" src="@/assets/images/aboutus.jpg" />
    <section class="our-team-section">
      <h2 class="our-team-title">Our Team</h2>
      <div class="our-team-div flex">
        <div class="about-us flex">
          <span>
            <h2>Tom Dorofeyev</h2>
            <span class="social-media-links">
              <img @click="newTabTo('https://www.facebook.com/tom.dorofeyev')" src="@/assets/images/socialNetworkIcons/facebook.png" />
              <img @click="newTabTo('')" src="@/assets/images/socialNetworkIcons/linkedin.png" />
              <img @click="newTabTo('https://github.com/tomdor123')" src="@/assets/images/socialNetworkIcons/github.png" />
            </span>
            <p>
              Fullstack web developer experienced with
            </p>
          </span>
          <img class="about-us-img" src="@/assets/images/tom.jpeg" alt="Tom Picture" />
        </div>
        <div class="about-us flex">
          <span>
            <h2>Nadav Abuhatsira</h2>
            <span class="social-media-links">
              <img @click="newTabTo('https://www.facebook.com/NadavAb')" src="@/assets/images/socialNetworkIcons/facebook.png"/>
              <img @click="newTabTo('https://www.linkedin.com/in/nadav-abuhatsira-7a2578105')" src="@/assets/images/socialNetworkIcons/linkedin.png" />
              <img @click="newTabTo('https://github.com/Nudu')" src="@/assets/images/socialNetworkIcons/github.png"/>
            </span>
            <p>An ambitious and detail-oriented individual that enjoys the finesse in code and isn't scared of tackling and solving challenges, passionate about new technologies but also intrigued by creative monetisation and the Ad Tech world and how all those come together, Enjoys listening to anything with a good beat and a long time avid gamer</p>
          </span>
          <img class="about-us-img" src="@/assets/images/nadav.jpg" alt="Nadav Picture" />
        </div>
        <div class="about-us flex">
          <span>
            <h2>Nofar Peled</h2>
            <span class="social-media-links">
              <img @click="newTabTo('https://www.facebook.com/nofarpeled4')" src="@/assets/images/socialNetworkIcons/facebook.png" />
              <img @click="newTabTo('https://www.linkedin.com/in/nofar-peled-3392b8159')" src="@/assets/images/socialNetworkIcons/linkedin.png" />
              <img @click="newTabTo('https://github.com/NofarPeled')" src="@/assets/images/socialNetworkIcons/github.png" />
            </span>
            <p>FullStack developer who have the desire to empower your brand by creating outstanding web application, so you can spread your message and increase your positive impact on the world <br>Looking for the next challenge.</p>
          </span>
          <img class="about-us-img" src="@/assets/images/nofar.jpg" alt="Nofar Picture" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    newTabTo: function(url) {
      window.open(url, "_blank");
    }
  }
};
</script>