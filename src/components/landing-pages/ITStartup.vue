<template>
    <div>
        <Banner></Banner>
        <BoxesArea></BoxesArea>
        <Services></Services>
        <ServicesArea></ServicesArea>
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
import Banner from './it-startup/Banner';
import BoxesArea from './it-startup/BoxesArea';
import Services from './it-startup/Services';
import ServicesArea from './it-startup/ServicesArea';
import Team from './it-startup/Team';
import Partner from './it-startup/Partner';
export default {
    name: 'ITStartup',
    components: {
        Banner,
        BoxesArea,
        Services,
        ServicesArea,
        Team,
        Partner,
        
    }
}
</script>