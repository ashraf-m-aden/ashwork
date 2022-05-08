<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Data Center et Réseau local</h2>
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

    <!-- Start Features Details Area -->
    <section class="features-details-area ptb-80">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 features-details-image">
            <img
              src="../../../assets/img/features-details-image/local-network.jpg"
              class="wow fadeInUp"
              alt="image"
            />
          </div>

          <div class="col-lg-6 features-details">
            <div class="features-details-desc">
              <h3>Réseau local</h3>
              <p>
                Notons ici quelques prérequis pour un réseau local optimisé,
                au-delà du choix de votre fournisseur d’accès, vos sites doivent
                être équipés « dans les règles de l’art » : Votre réseau local
                Ethernet devra être structuré autour d’une technologie filaire
                (minimum catégorie 6e). Dans la mesure du possible, nous vous
                conseillons de centraliser votre réseau informatique dans une
                salle dédiée aux accès limités. Les éléments actifs du réseau
                local et de connexions distantes devront être entreposés dans
                une baie de brassage normalisée.
              </p>
            </div>
          </div>
        </div>

        <div class="separate"></div>

        <div class="row align-items-center">
          <div class="col-lg-6 features-details">
            <div class="features-details-desc">
              <h3>
                MICROSOFT AZURE, UNE PLATEFORME PROFESSIONNELLE DE CLOUD
                COMPUTING OUVERTE ET FLEXIBLE
              </h3>

              <p>
                Azure est le Cloud professionnel de Microsoft. Il permet de
                répondre à l’ensemble de vos besoins. Cette plateforme intègre
                la gestion des droits d’accès, la sécurité, la gestion de vos
                données et l’intégration de vos applications « métiers ».
              </p>

              <div class="features-details-accordion">
                <div role="tablist">
                  <VueFaqAccordion :items="myItems" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 features-details-image">
            <img
              src="../../../assets/img/features-details-image/azure.png"
              class="wow fadeInUp"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End Features Details Area -->
    <Team></Team>
    <!-- Start Ready To Talk Area -->
    <section class="ready-to-talk">
      <div class="container">
        <h3>Prêt à faire le pas?</h3>
        <p>Notre équipe est prête à répondre à toutes vos questions</p>
        <a href="#" class="btn btn-primary">Contactez nous</a>
      </div>
    </section>
    <!-- End Ready To Talk Area -->
    <Partner></Partner>
  </div>
</template>

<script>
import Team from "../../landing-pages/it-startup/Team";
import Partner from "../../landing-pages/it-startup/Partner";
import VueFaqAccordion from "vue-faq-accordion";
export default {
  name: "FeatureDetails",
  components: {
    VueFaqAccordion,
    Team,
    Partner,
  },
  data() {
    return {
      text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.`,
      myItems: [
        {
          title: "Sécurité",
          value: "Azure assure la sécurité de vos données",
        },
        {
          title: "Confidentialité",
          value: "Vous possédez et contrôlez vos données clients.",
        },
        {
          title: "Transparence",
          value: "Vous savez comment vos données sont stockées et sécurisées.",
        },
      ],
    };
  },
};
</script>
