<template>
    <div>
        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>Spotlight</h2>
                    </div>
                </div>
			</div>
			
			<div class="shape1"><img src="../../../assets/img/shape1.png" alt="shape"></div>
			<div class="shape2 rotateme"><img src="../../../assets/img/shape2.svg" alt="shape"></div>
			<div class="shape3"><img src="../../../assets/img/shape3.svg" alt="shape"></div>
			<div class="shape4"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
			<div class="shape5"><img src="../../../assets/img/shape5.png" alt="shape"></div>
			<div class="shape6 rotateme"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
			<div class="shape7"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
			<div class="shape8 rotateme"><img src="../../../assets/img/shape2.svg" alt="shape"></div>
        </div>
		<!-- End Page Title -->

        <!-- Start About Area -->
		<section class="about-area ptb-80">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-md-12">
						<div class="about-image">
							<img src="../../../assets/img/1.png" alt="image">
						</div>
					</div>

					<div class="col-lg-6 col-md-12">
						<div class="about-content">
							<div class="section-title">
								<h2>A propos de nous</h2>
								<div class="bar"></div>
								<p> Chez Spotlight, nous offrons des services informatiques et développons
            des produits innovants et créatifs qui fournissent des solutions
            globales de communication et d'information. Parmi nos services, la
            conception, création et maintenance des infrastructures reseaux, la
            conception et le développement de sites Web, les applications sur
            mesure, les solutions de commerce électronique.</p>
							</div>

							<p>Spotlight s'est engagé à
            offir des logiciels de qualité dans tout le territoire national.
            L'objectif général de Spotlight est de promouvoir des technologies de
            l'information avancées pour un fonctionnement multi-utilisateurs.</p>

							<p>Notre
            philosophie commerciale est d'assurer le produit de la plus haute
            qualité, la satisfaction totale du client, la livraison rapide des
            solutions et le meilleur rapport qualité / prix de l'industrie. </p>

							<p>Notre
            objectif est d'offrir un haut degré de convivialité des produits grâce à
            un personnel de l'entreprise positif, créatif et concentré.</p>
						</div>
					</div>
				</div>

				<div class="about-inner-area">
					<div class="row">
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="about-text">
								<h3>Expertise</h3>
								<p>Une équipe experte composée de consultants hautement certifiés
                                et qualifiés possédant une grande expérience dans
                                l'accompagnement des directions informatiques depuis plus de 2
                                ans. Nous favorisons un plan de formation continu adapté à
                                l’évolution du marché IT et aux besoins de nos clients.</p>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="about-text">
								<h3>Qualité differenciante</h3>
								<p> Nos procès rigoureux, l’accompagnement privilégié de nos
                                clients et l’implication d’une structure jeune et dynamique
                                nous permettent de concevoir des solutions toujours plus
                                innovantes avec une haute qualité de service.</p>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
							<div class="about-text">
								<h3>Agilité et réactivité</h3>
								<p>Nous réalisons une amélioration continue de nos processus
                                basés sur les pratiques IT. Nous avons choisi une structure
                                simple et unifiée pour assurer une bonne communication et une
                                meilleure réactivité.</p>
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
				<p>Notre équipe est prête à répondre à toutes vos questions</p>
				<a href="#" class="btn btn-primary">Contactez nous</a>
			</div>
		</section>
		<!-- End Ready To Talk Area -->
        <Partner></Partner>
    </div>
</template>

<script>
import Team from '../../landing-pages/it-startup/Team';
import Partner from '../../landing-pages/it-startup/Partner';
export default {
    name: 'AboutStyleOne',
    components: {
        Team,
        Partner,
    }
}
</script>