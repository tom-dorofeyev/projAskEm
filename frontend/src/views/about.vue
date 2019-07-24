<template>
  <div class="about">
    <!-- <h2 class="about-title">About Us</h2> -->
    <div class="our-mission-div flex">
      <div class="our-mission">Our Mission</div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus fugiat blanditiis dolores consequuntur id expedita similique omnis nulla, sequi animi ex asperiores possimus quam nostrum mollitia eos nam? Ratione. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, cumque? Dolorem dolorum iure sit maxime odit tempora eaque modi, dolor eligendi rerum quisquam quibusdam doloremque dignissimos sequi consectetur quis rem!</p>
    </div>
    <ul class="about-details flex clean-list">
      <li>
        <div class="heading">3</div>
        <p>Users Around The World</p>
      </li>
      <li>
        <div class="heading">100</div>
        <p>Surveys Uploaded</p>
      </li>
      <li>
        <div class="heading">3</div>
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
              <img @click="newTabTo('https://www.facebook.com/tom.dorofeyev')" src="@/assets/images/facebook.svg" alt />
              <img @click="newTabTo('')" src="@/assets/images/linkedin.svg" alt />
              <img @click="newTabTo('https://github.com/tomdor123')" src="@/assets/images/github.svg" alt />
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptate iste cum? Qui id voluptas aspernatur. Voluptatibus, accusantium. Dolor laboriosam maiores pariatur quisquam consectetur expedita omnis sit fuga fugit officiis!</p>
          </span>
          <img class="about-us-img" src="@/assets/images/tom.jpg" alt="Tom Picture" />
        </div>
        <div class="about-us flex">
          <span>
            <h2>Nadav Abuhatsira</h2>
            <span class="social-media-links">
              <img @click="newTabTo('https://www.facebook.com/NadavAb')" src="@/assets/images/facebook.svg" alt />
              <img @click="newTabTo('https://www.linkedin.com/in/nadav-abuhatsira-7a2578105')" src="@/assets/images/linkedin.svg" alt />
              <img @click="newTabTo('https://github.com/Nudu')" src="@/assets/images/github.svg" alt />
            </span>
            <p>An ambitious and detail-oriented individual that enjoys the finesse in code and isn't scared of tackling and solving challenges, passionate about new technologies but also intrigued by creative monetisation and the Ad Tech world and how those all come together, Enjoys listening to anything with a good beat and a long time avid gamer</p>
          </span>
          <img class="about-us-img" src="@/assets/images/nadav.jpg" alt="Nadav Picture" />
        </div>
        <div class="about-us flex">
          <span>
            <h2>Nofar Peled</h2>
            <span class="social-media-links">
              <img @click="newTabTo('https://www.facebook.com/nofarpeled4')" src="@/assets/images/facebook.svg" alt />
              <img @click="newTabTo('https://www.linkedin.com/in/nofar-peled-3392b8159')" src="@/assets/images/linkedin.svg" alt />
              <img @click="newTabTo('https://github.com/NofarPeled')" src="@/assets/images/github.svg" alt />
            </span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ipsum esse dolor sint omnis nemo quidem praesentium nostrum dolore saepe vel error quos veritatis illo temporibus optio accusamus eos molestiae.</p>
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
