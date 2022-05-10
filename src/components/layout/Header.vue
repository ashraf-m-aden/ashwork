<template>
  <!-- Start  Area -->
  <header id="header" :class="['headroom', { 'is-sticky': isSticky }]">
    <div class="startp-nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <!-- <router-link class="navbar-brand" to="/">
            <img
              src="../../assets/img/spotlight.png"
              class="logo"
              alt="spotlight it solutions djibouti"
            />
          </router-link> -->

          <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

          <b-collapse
            class="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
            is-nav
          >
            <ul class="navbar-nav nav ml-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link active"
                  >Acceuil</router-link
                >
              </li>

              <li class="nav-item">
                <router-link to="/about" class="nav-link"
                  >A mon propos</router-link
                >
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link"
                  >Vos objectifs <feather type="chevron-down"></feather
                ></a>
                <ul class="dropdown_menu">
                  <li class="nav-item">
                    <router-link to="/votre-profil" class="nav-link"
                      >Votre profil</router-link
                    >
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">Vos besoins</a>
                    <ul class="dropdown_menu">
                      <li class="nav-item">
                        <router-link to="/cloud-entreprise" class="nav-link"
                          >Solutions cloud pour entreprise</router-link
                        >
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/local-network-data-center"
                          class="nav-link"
                          >Data center</router-link
                        >
                      </li>

                      <li class="nav-item">
                        <router-link
                          to="/local-network-data-center"
                          class="nav-link"
                          >Réseau local</router-link
                        >
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/securite-informatique"
                          class="nav-link"
                          >Sécurité informatique</router-link
                        >
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link"
                          >Solutions collaboratives</a
                        >
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">Solutions materielles</a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">Solutions logicielles</a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">Solution point de vente</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">Vos attentes</a>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link"
                  >Nos services <feather type="chevron-down"></feather
                ></a>
                <ul class="dropdown_menu">
                  <li class="nav-item">
                    <a href="#" class="nav-link">Création d'applications Web</a>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">Consultation informatique</a>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link"
                      >Distribution et installation</a
                    >
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">Assistance utilisateurs</a>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link"
                      >Vente des systemes et materiels informatiques</a
                    >
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link"
                      >Formation informatique et bureautique</a
                    >
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <router-link to="/contact" class="nav-link"
                  >Contact</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </nav>
      </div>
    </div>
  </header>
  <!-- End Navbar Area -->
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isSticky: false,
    };
  },

  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      // eslint-disable-next-line no-console
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },
};
</script>
