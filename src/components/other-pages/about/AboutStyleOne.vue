<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Développeur Full-stack</h2>
          </div>
        </div>
      </div>

      <div class="shape1">
        <img src="../../../assets/img/shape1.png" alt="shape" />
      </div>
      <div class="shape2 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="shape" />
      </div>
      <div class="shape3">
        <img src="../../../assets/img/shape3.svg" alt="shape" />
      </div>
      <div class="shape4">
        <img src="../../../assets/img/shape4.svg" alt="shape" />
      </div>
      <div class="shape5">
        <img src="../../../assets/img/shape5.png" alt="shape" />
      </div>
      <div class="shape6 rotateme">
        <img src="../../../assets/img/shape4.svg" alt="shape" />
      </div>
      <div class="shape7">
        <img src="../../../assets/img/shape4.svg" alt="shape" />
      </div>
      <div class="shape8 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="shape" />
      </div>
    </div>
    <!-- End Page Title -->

    <!-- Start About Area -->
    <section class="about-area ptb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="about-image">
              <img
                src="../../../assets/img/features-details-image/azure.png"
                alt="image"
              />
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="about-content">
              <div class="section-title">
                <h2>A mon propos</h2>
                <div class="bar"></div>
                <p>
                  Je m'apelle Ashraf Mohamed et je suis un développeur
                  Full-stack. Avec une experience de plus de 3 ans dans le
                  domaine de la programmation web, je maitrise les plus recentes
                  technologies de création d'applications web. Angular, Vue.js,
                  Node.js et Spring Boot entre autres, je crées des applications
                  web robustes et modernes. Je suis certifié AWS Solutions
                  Architect Associate, c'est pour vous dire, le cloud ca me
                  connait! D'une simple plateforme vitrine à un projet plus
                  complexe, je suis l'homme qu'il vous faut!
                </p>
                <p>Au plaisir de vous rencontrer!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Area -->

    <Team></Team>
    <!-- Start Ready To Talk Area -->
    <section class="ready-to-talk">
      <div class="container">
        <h3>Prêt à faire le pas?</h3>
        <a href="#" class="btn btn-primary">Contactez moi</a>
      </div>
    </section>
  </div>
</template>

<script>
import Team from "../../landing-pages/it-startup/Team";
export default {
  name: "AboutStyleOne",
  components: {
    Team,
  },
};
</script>
