"use client";

import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, Zap, Users, TrendingUp, Sparkles, Bot, Workflow } from "lucide-react";
import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);
	const [isHoveringCard, setIsHoveringCard] = useState(false);
	const galleryRef = useRef<HTMLDivElement | null>(null);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Détecter la position de la souris
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMouseX(e.clientX);
			setMouseY(e.clientY);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	// Défilement automatique et smooth de la galerie basé sur la position de la souris
	useEffect(() => {
		const gallery = galleryRef.current;
		if (!gallery) return;

		let animationFrameId: number;

		const animate = () => {
			// Arrêter le défilement si le curseur survole une carte
			if (isHoveringCard) {
				animationFrameId = requestAnimationFrame(animate);
				return;
			}

			// Récupérer la position et les dimensions de la galerie
			const galleryRect = gallery.getBoundingClientRect();
			const galleryLeft = galleryRect.left;
			const galleryRight = galleryRect.right;
			const galleryTop = galleryRect.top;
			const galleryBottom = galleryRect.bottom;
			const galleryWidth = galleryRect.width;

			let targetSpeed = 0.8; // Vitesse de défilement constante de base

			// Vérifier si la souris est au-dessus de la galerie
			const isMouseOverGallery =
				mouseX >= galleryLeft &&
				mouseX <= galleryRight &&
				mouseY >= galleryTop &&
				mouseY <= galleryBottom;

			if (isMouseOverGallery) {
				// Position relative de la souris dans la galerie (0 à 1)
				const relativeX = (mouseX - galleryLeft) / galleryWidth;
				const threshold = 0.3; // Zone de 30% de chaque côté de la galerie

				if (relativeX < threshold) {
					// Curseur à gauche de la galerie - défiler vers la gauche
					const intensity = (threshold - relativeX) / threshold;
					targetSpeed = -3 * intensity;
				} else if (relativeX > 1 - threshold) {
					// Curseur à droite de la galerie - défiler vers la droite
					const intensity = (relativeX - (1 - threshold)) / threshold;
					targetSpeed = 3 * intensity;
				}
			}

			// Smooth scrolling
			gallery.scrollLeft += targetSpeed;

			// Boucle infinie seamless - on a 12 cartes (6 originales + 6 dupliquées)
			// Largeur approximative d'une carte + gap = 280px + 24px = 304px
			// 6 cartes = 1824px
			const cardSetWidth = 6 * 304;

			if (gallery.scrollLeft >= cardSetWidth) {
				gallery.scrollLeft = gallery.scrollLeft - cardSetWidth;
			} else if (gallery.scrollLeft <= 0) {
				gallery.scrollLeft = cardSetWidth + gallery.scrollLeft;
			}

			animationFrameId = requestAnimationFrame(animate);
		};

		animationFrameId = requestAnimationFrame(animate);

		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, [mouseX, mouseY, isHoveringCard]);

	return (
		<div className="min-h-screen bg-white dark:bg-gray-950">
			{/* Navigation épurée */}
			<nav className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-0 z-50">
				<div className="container mx-auto px-6 py-5">
					<div className="flex justify-between items-center">
						<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
							Synapsis
						</h1>
						<div className="hidden md:flex gap-8 items-center">
							<button
								onClick={() => scrollToSection("services")}
 								className="text-gray-600 dark:text-gray-300 hover:text-[#069D14] transition-colors font-medium text-sm"							>
								Solutions
							</button>
							<button
								onClick={() => scrollToSection("methode")}
								className="text-gray-600 dark:text-gray-300 hover:text-[#069D14] transition-colors font-medium text-sm"
							>
								Méthode
							</button>
							<button
								onClick={() => scrollToSection("qui-suis-je")}
								className="text-gray-600 dark:text-gray-300 hover:text-[#069D14] transition-colors font-medium text-sm"
							>
								Qui suis-je ?
							</button>
							<Link
								href="/rendez-vous"
 								className="border-2 border-[#069D14] text-[#069D14] hover:bg-[#069D14] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 group">
								Appel de découverte
								<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
							</Link>
						</div>
					</div>
				</div>
			</nav>

		{/* Hero Section épurée */}
		<section id="accueil" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden min-h-screen flex items-center px-6 relative overflow-hidden animate-fade-in-up delay-900">
			<div className="py-20 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hiddenanimate-fade-in-up delay-2000 container mx-auto max-w-6xl">
				{/* Titre centré au-dessus */}
				<h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-12 leading-tight text-left">
					Libérez <span className="text-[#069D14]">en moyenne 8h par semaine</span> grâce à l'automatisation{" "}
					<span className="text-[#0A4D8C]">intelligente.</span>
				</h2>
		
				{/* Grille avec texte à gauche et image à droite */}
				<div className="grid md:grid-cols-2 gap-12 items-center mt-5">
					{/* Texte à gauche */}
					<div className="relative z-10">
						<p className="text-xl text-gray-600 dark:text-gray-400 mb-1 leading-relaxed alinea">
							<strong>Dirigeants et entrepreneurs :</strong> <br/>
							Vos équipes croulent sous les tâches répétitives qui ne génèrent aucune valeur. Transformons ce temps perdu en croissance mesurable et en avantage concurrentiel.
						</p>
						<Link
							href="/rendez-vous"
							className="bg-[#069D14] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#058a12] transition-all duration-300 inline-flex items-center gap-2 group shadow-lg hover:shadow-xl mt-25">
								Réserve ton appel
							<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
						</Link>
						
						{/* Section "Ils nous font confiance" */}
						{/*<div className="mt-16">*/}
							{/*<p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
								Déjà adoptée par
							</p>								<div className="flex gap-8 items-center opacity-40">
								<div className="text-2xl font-bold text-gray-400">PME</div>
								<div className="text-2xl font-bold text-gray-400">Agences</div>
								<div className="text-2xl font-bold text-gray-400">Scale-ups</div>
							</div>
						</div>*/}
					</div>

						{/* Animation Lottie côté droit */}
					<div className="hidden md:block relative">
						<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-12 md:p-16 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[400px] flex flex-col justify-center">
							<DotLottieReact
								src="/animation/accueil.lottie"
								loop
								autoplay
								style={{ width: '120%', height: '120%' }}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

			{/* test début */}
			{/* NOUVELLE SECTION - 3 Chiffres Essentiels */}
			<section className="py-20 md:py-32 px-6 relative overflow-hidden">
				<div className="container mx-auto max-w-6xl">
					{/* Titre de section */}
					<div className="text-center mb-16">
						<div className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
							L'IMPACT DE L'INACTION
						</div>
						<h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Chaque jour sans automatisation vous coûte cher
						</h3>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							Chaque semaine sans automatisation creuse l'écart avec les entreprises qui ont déjà franchi le cap. Les chiffres parlent d'eux-mêmes
						</p>
					</div>

					{/* Grille des 3 chiffres */}
					<div className="grid md:grid-cols-3 gap-8 mb-12">
						{/* Chiffre 1 - Temps perdu */}
						<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="mb-4">
								<div className="text-7xl font-bold text-[#0A4D8C] mb-3">
									60%
								</div>
								<p className="text-xl text-gray-900 dark:text-white font-semibold mb-3">
									Temps perdu en tâches répétitives
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
									Vos collaborateurs ne sont productifs que <strong>40%</strong> de leur temps <br/> le reste est englouti par des processus répétitifs automatisables.
								</p>
							</div>
							<div className="pt-4 border-t border-gray-200 dark:border-gray-700">
								<p className="text-xs text-gray-500 dark:text-gray-500">Source : Asana, 2023</p>
							</div>
						</div>

						{/* Chiffre 2 - Jours gaspillés */}
						<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="mb-4">
								<div className="text-7xl font-bold text-[#F2D335] mb-3">
									50
								</div>
								<p className="text-xl text-gray-900 dark:text-white font-semibold mb-3">
									jours perdus par employé/an
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
									L'équivalent de <strong>2 mois complets</strong> de travail évaporés sans créer de valeur ajoutée pour votre entreprise.
								</p>
							</div>
							<div className="pt-4 border-t border-gray-200 dark:border-gray-700">
								<p className="text-xs text-gray-500 dark:text-gray-500">Source : TeamStage, 2024</p>
							</div>
						</div>

						{/* Chiffre 3 - Coût financier */}
						<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="mb-4">
								<div className="text-7xl font-bold text-[#069D14] mb-3">
									400%
								</div>
								<p className="text-xl text-gray-900 dark:text-white font-semibold mb-3">
									ROI moyen sur l'automatisation
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
									Les entreprises qui automatisent génèrent <strong>4€ pour chaque 1€ investi</strong> dans l'automatisation des processus.
								</p>
							</div>
							<div className="pt-4 bordeFr-t border-gray-200 dark:border-gray-700">
								<p className="text-xs text-gray-500 dark:text-gray-500">Source : Gartner Automation ROI Analysis, 2024</p>
							</div>
						</div>
					</div>

					{/* CTA Box avec urgence - Style identique à Impact mesurable */}
<div className="bg-gradient-to-r from-[#069D14] to-[#0A4D8C] rounded-2xl p-8 md:p-10 mt-35">
	<h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
		Pendant que vous lisez ceci, vos concurrents automatisent.
	</h3>
	<p className="text-xl text-white/90 mb-8 text-center">
		<strong className="text-white">Plus d'une entreprise sur 2</strong> ont déjà franchi le pas.
	</p>
	
	<div className="flex flex-col items-center gap-6">
		<Link
			href="/rendez-vous"
			className="inline-flex items-center gap-2 bg-white text-[#069D14] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
		>
			<span>Rejoignez les leaders dès aujourd&apos;hui</span>
			<ArrowRight className="w-5 h-5" />
		</Link>
		
		<div className="flex items-center gap-4 text-white/90 text-sm">
			<div className="flex items-center gap-2">
				<div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
					<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<span>Appel de découverte</span>
			</div>
			<div className="flex items-center gap-2">
				<div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
					<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<span>30 minutes</span>
			</div>
			<div className="flex items-center gap-2">
				<div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
					<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<span>Résultats immédiats</span>
			</div>
		</div>
	</div>
</div>
				</div>
			</section>
			{/* test fin */}
			{/* Section Services avec badge */}
			<section id="services" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
				{/* Image décorative à gauche */}
				<div className="hidden lg:block absolute left-0 top-1/4 w-80 h-96 opacity-20">
					<img
						src="/images/ai-network.jpg"
						alt="Réseau IA"
						className="w-full h-full object-cover rounded-r-3xl"
					/>
				</div>

				<div className="container mx-auto max-w-6xl relative z-10">
					<div className="text-center mb-16">
						<div className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
							NOS SOLUTIONS
						</div>
						<h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
							Ces automatisations au service de<br/>{" "}
							<span className="text-[#069D14]">votre rentabilité.</span>
						</h3>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							 <strong>Voici comment Synapsis transforme votre opérationnel:</strong>
						</p>
					</div>

					{/* Galerie horizontale scrollable */}
<div
	ref={galleryRef}
	className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide mt-30"
	style={{
		scrollbarWidth: 'none',
		msOverflowStyle: 'none',
	}}
>
	<Card
	className="min-w-[280px] p-6 bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-300 group snap-center flex-shrink-0"
	onMouseEnter={() => setIsHoveringCard(true)}
	onMouseLeave={() => setIsHoveringCard(false)}
>
	<div className="w-12 h-12 bg-[#069D14]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#069D14] transition-colors">
		<Zap className="w-6 h-6 text-[#069D14] group-hover:text-white transition-colors" />
	</div>
	<h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
		Pipeline Commercial Automatisé
	</h4>
	<p className="text-sm text-gray-600 dark:text-gray-400">
		L&apos;IA identifie vos meilleurs prospects, <br/> les qualifie et les relance automatiquement jusqu&apos;à la conversion.
	</p>
</Card>

<Card
	className="min-w-[280px] p-6 bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-300 group snap-center flex-shrink-0"
	onMouseEnter={() => setIsHoveringCard(true)}
	onMouseLeave={() => setIsHoveringCard(false)}
>
	<div className="w-12 h-12 bg-[#0A4D8C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0A4D8C] transition-colors">
		<Users className="w-6 h-6 text-[#0A4D8C] group-hover:text-white transition-colors" />
	</div>
	<h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
		Expérience Client Sans Friction
	</h4>
	<p className="text-sm text-gray-600 dark:text-gray-400">
		Support intelligent 24/7, onboarding automatisé <br/>et suivi de satisfaction en temps réel pour des clients ravis.
	</p>
</Card>

<Card
	className="min-w-[280px] p-6 bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-300 group snap-center flex-shrink-0"
	onMouseEnter={() => setIsHoveringCard(true)}
	onMouseLeave={() => setIsHoveringCard(false)}
>
	<div className="w-12 h-12 bg-[#F2D335]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F2D335] transition-colors">
		<TrendingUp className="w-6 h-6 text-[#F2D335] group-hover:text-gray-900 transition-colors" />
	</div>
	<h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
		Finance & Admin en Pilote Automatique
	</h4>
	<p className="text-sm text-gray-600 dark:text-gray-400">
		Devis, factures et relances générés automatiquement <br/>avec tableaux de bord financiers mis à jour en temps réel.
	</p>
</Card>

<Card
	className="min-w-[280px] p-6 bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-300 group snap-center flex-shrink-0"
	onMouseEnter={() => setIsHoveringCard(true)}
	onMouseLeave={() => setIsHoveringCard(false)}
>
	<div className="w-12 h-12 bg-[#069D14]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#069D14] transition-colors">
		<Sparkles className="w-6 h-6 text-[#069D14] group-hover:text-white transition-colors" />
	</div>
	<h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
		Acquisition Client Automatisée
	</h4>
	<p className="text-sm text-gray-600 dark:text-gray-400">
		Campagnes multi-canaux synchronisées avec IA prédictive <br/>pour vous concentrer uniquement sur les leads à fort potentiel.
	</p>
</Card>

<Card
	className="min-w-[280px] p-6 bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-300 group snap-center flex-shrink-0"
	onMouseEnter={() => setIsHoveringCard(true)}
	onMouseLeave={() => setIsHoveringCard(false)}
>
	<div className="w-12 h-12 bg-[#0A4D8C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0A4D8C] transition-colors">
		<Bot className="w-6 h-6 text-[#0A4D8C] group-hover:text-white transition-colors" />
	</div>
	<h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
		Votre Équipe IA 24/7
	</h4>
	<p className="text-sm text-gray-600 dark:text-gray-400">
		Agents virtuels qui qualifient vos prospects et <br/>répondent à vos clients instantanément, même la nuit et le weekend.
	</p>
</Card>

<Card
	className="min-w-[280px] p-6 bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-300 group snap-center flex-shrink-0"
	onMouseEnter={() => setIsHoveringCard(true)}
	onMouseLeave={() => setIsHoveringCard(false)}
>
	<div className="w-12 h-12 bg-[#F2D335]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F2D335] transition-colors">
		<Workflow className="w-6 h-6 text-[#F2D335] group-hover:text-gray-900 transition-colors" />
	</div>
	<h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
		Tous Vos Outils Connectés
	</h4>
	<p className="text-sm text-gray-600 dark:text-gray-400">
		CRM, facturation et gestion synchronisés automatiquement<br/>pour une seule saisie et zéro erreur de transfert.
	</p>
</Card>

{/* Duplication des cartes pour effet de boucle infinie */}
<Card
	className="min-w-[280px] p-6 bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-300 group snap-center flex-shrink-0"
	onMouseEnter={() => setIsHoveringCard(true)}
	onMouseLeave={() => setIsHoveringCard(false)}
>
	<div className="w-12 h-12 bg-[#069D14]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#069D14] transition-colors">
		<Zap className="w-6 h-6 text-[#069D14] group-hover:text-white transition-colors" />
	</div>
	<h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
		Pipeline Commercial Automatisé
	</h4>
	<p className="text-sm text-gray-600 dark:text-gray-400">
		L&apos;IA identifie vos meilleurs prospects, les qualifie et les relance automatiquement jusqu&apos;à la conversion.
	</p>
</Card>

<Card
	className="min-w-[280px] p-6 bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-300 group snap-center flex-shrink-0"
	onMouseEnter={() => setIsHoveringCard(true)}
	onMouseLeave={() => setIsHoveringCard(false)}
>
	<div className="w-12 h-12 bg-[#0A4D8C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0A4D8C] transition-colors">
		<Users className="w-6 h-6 text-[#0A4D8C] group-hover:text-white transition-colors" />
	</div>
	<h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
		Expérience Client Sans Friction
	</h4>
	<p className="text-sm text-gray-600 dark:text-gray-400">
		Support intelligent 24/7, onboarding automatisé et suivi de satisfaction en temps réel pour des clients ravis.
	</p>
</Card>

<Card
	className="min-w-[280px] p-6 bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-300 group snap-center flex-shrink-0"
	onMouseEnter={() => setIsHoveringCard(true)}
	onMouseLeave={() => setIsHoveringCard(false)}
>
	<div className="w-12 h-12 bg-[#F2D335]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F2D335] transition-colors">
		<TrendingUp className="w-6 h-6 text-[#F2D335] group-hover:text-gray-900 transition-colors" />
	</div>
	<h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
		Finance & Admin en Pilote Automatique
	</h4>
	<p className="text-sm text-gray-600 dark:text-gray-400">
		Devis, factures et relances générés automatiquement avec tableaux de bord financiers mis à jour en temps réel.
	</p>
</Card>

<Card
	className="min-w-[280px] p-6 bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-300 group snap-center flex-shrink-0"
	onMouseEnter={() => setIsHoveringCard(true)}
	onMouseLeave={() => setIsHoveringCard(false)}
>
	<div className="w-12 h-12 bg-[#069D14]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#069D14] transition-colors">
		<Sparkles className="w-6 h-6 text-[#069D14] group-hover:text-white transition-colors" />
	</div>
	<h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
		Acquisition Client Automatisée
	</h4>
	<p className="text-sm text-gray-600 dark:text-gray-400">
		Campagnes multi-canaux synchronisées avec IA prédictive pour vous concentrer uniquement sur les leads à fort potentiel.
	</p>
</Card>

<Card
	className="min-w-[280px] p-6 bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-300 group snap-center flex-shrink-0"
	onMouseEnter={() => setIsHoveringCard(true)}
	onMouseLeave={() => setIsHoveringCard(false)}
>
	<div className="w-12 h-12 bg-[#0A4D8C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0A4D8C] transition-colors">
		<Bot className="w-6 h-6 text-[#0A4D8C] group-hover:text-white transition-colors" />
	</div>
	<h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
		Votre Équipe IA 24/7
	</h4>
	<p className="text-sm text-gray-600 dark:text-gray-400">
		Agents virtuels qui qualifient vos prospects et répondent à vos clients instantanément, même la nuit et le weekend.
	</p>
</Card>

<Card
	className="min-w-[280px] p-6 bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-300 group snap-center flex-shrink-0"
	onMouseEnter={() => setIsHoveringCard(true)}
	onMouseLeave={() => setIsHoveringCard(false)}
>
	<div className="w-12 h-12 bg-[#F2D335]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F2D335] transition-colors">
		<Workflow className="w-6 h-6 text-[#F2D335] group-hover:text-gray-900 transition-colors" />
	</div>
	<h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
		Tous Vos Outils Connectés
	</h4>
	<p className="text-sm text-gray-600 dark:text-gray-400">
		CRM, facturation et gestion synchronisés automatiquement pour une seule saisie et zéro erreur de transfert.
	</p>
</Card>
</div>

					{/* Indicateur de position de la souris */}
					{/*<div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
						Déplacez votre curseur à gauche ou à droite pour contrôler le défilement
					</div>*/}
				</div>
			</section>

			{/* Section Rendez-vous IA */}
			<section className="py-20 px-6">
				<div className="container mx-auto max-w-6xl">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="hidden md:block relative order-1">
							<div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl">
								<img
									src="/images/business-meeting.jpg"
									alt="Consultation stratégique"
									className="w-full h-full object-cover"
								/>
								{/* Overlay avec pattern */}
								<div className="absolute inset-0 bg-gradient-to-br from-[#069D14]/30 to-transparent"></div>
								{/* Stats flottantes */} 
								<div className="absolute bottom-8 left-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl">
									<p className="text-sm text-gray-600 dark:text-gray-400">Durée</p>
									<p className="text-3xl font-bold text-[#0A4D8C]">30 min</p>
								</div>
							</div>
						</div>

						<div className="order-2">
							<div className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
								APPEL DE DÉCOUVERTE GRATUIT
							</div>
							<h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 mt-2 mt-5">
								Identifiez vos processus{" "}
								<span className="text-[#069D14]">chronophages</span> en 30 minutes.
							</h3>
							<p className="text-lg text-gray-600 dark:text-gray-400 mb-8 mt-20">
								Appel stratégique <strong>sans engagement</strong> pour analyser vos processus actuels. J'identifie les tâches chronophages, calcule le gain potentiel, et vous montre concrètement comment automatiser ce qui peut l'être.<br/> <strong>Sans engagement, 100% sur-mesure.</strong>
							</p>
							<Link
								href="/rendez-vous"
								className="bg-[#069D14] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#058a12] transition-all duration-300 inline-flex items-center gap-2 group shadow-lg hover:shadow-xl mt-17"
							>
								Je réserve mon appel de découverte
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Section Méthode */}
			<section id="methode" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
				{/* Image décorative à droite */}
				<div className="hidden lg:block absolute right-0 top-1/3 w-96 h-80 opacity-15">
					<img
						src="/images/workflow-diagram.jpg"
						alt="Processus automatisé"
						className="w-full h-full object-cover rounded-l-3xl"
					/>
				</div>

				<div className="container mx-auto max-w-6xl relative z-10">
					<div className="text-center mb-16">
					<div className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
						NOTRE MÉTHODE
					</div>
						<h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
							De l&apos;audit au premier gain en{" "}
							<span className="text-[#0A4D8C]">60 jours.</span>
						</h3>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
						Approche pragmatique, déploiement progressif, résultats concrets. 
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mt-25">
					<div className="text-center">
						<div className="w-16 h-16 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
							1
						</div>
							<h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								Audit & Stratégie
							</h4>
						<p className="text-gray-600 dark:text-gray-400">
							Identification et plan d&apos;action chiffré des tâches chronophages à automatiser.
						</p>
					</div>

					<div className="text-center">
						<div className="w-16 h-16 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
							2
						</div>
							<h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								Déploiement Progressif
							</h4>
						<p className="text-gray-600 dark:text-gray-400">
							Mise en place par étapes jusqu&apos;à l&apos;autonomie complète.
						</p>
					</div>

					<div className="text-center">
					<div className="w-16 h-16 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
						3
					</div>
					<h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
						Optimisation Continue
					</h4>
					<p className="text-gray-600 dark:text-gray-400">
						Suivi mensuel, maintenance proactive et ajustements selon vos besoins.
					</p>
					</div>
				</div>
			</div>
			</section>

			{/* Section Résultats */}
			<section className="py-20 px-6">
				<div className="container mx-auto max-w-4xl">
					<Card className="p-12 bg-gradient-to-br from-[#069D14] to-[#0A4D8C] text-white border-0 shadow-2xl">
						<h3 className="text-4xl font-bold mb-8 text-center">
							Impact mesurable dès 7 jours
						</h3>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="flex items-start gap-4">
								<CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
								<p className="text-lg">
									<strong>8 à 12h récupérées</strong> par collaborateur chaque semaine
								</p>
							</div>
							<div className="flex items-start gap-4">
								<CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
								<p className="text-lg">
									<strong>40% de réduction</strong> des coûts opérationnels récurrents
								</p>
							</div>
							<div className="flex items-start gap-4">
								<CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
								<p className="text-lg">
									<strong>85% d'erreurs en moins</strong> sur les processus automatisés
								</p>
							</div>
							<div className="flex items-start gap-4">
								<CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
								<p className="text-lg">
									<strong>Croissance sans limite</strong> sans augmenter vos effectifs
								</p>
							</div>
						</div>
					</Card>
				</div>
			</section>

			{/* Section Qui suis-je */}
			<section id="qui-suis-je" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
				<div className="container mx-auto max-w-6xl">
					<div className="grid md:grid-cols-5 gap-12 items-center">
						{/* Photo de profil à gauche */}
						<div className="md:col-span-2 flex justify-center">
							<div className="relative">
								<div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl ring-8 ring-white dark:ring-gray-800">
									<img
										src="/images/frederic-mallet.jpg"
										alt="Frédéric Mallet"
										className="w-full h-full object-cover"
									/>
								</div>
								{/* Badge d'expertise */}
								<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#069D14] text-white px-6 py-3 rounded-full shadow-xl whitespace-nowrap">
									<p className="font-bold">MALLET Frédéric</p>
								</div>
							</div>
						</div>

						{/* Contenu à droite */}
						<div className="md:col-span-3">
							<h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
								Votre partenaire en automatisation stratégique
							</h3>
							<div className="space-y-6">
								<p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
									<strong className="text-[#069D14]">Frédéric Mallet</strong>,  expert en automatisation et IA appliquée au business. Spécialisé dans n8n, intégrations API et agents intelligents, je conçois des systèmes d'automatisation qui libèrent du temps et génèrent des résultats mesurables pour les PME, agences et entreprises en croissance.
								</p>
								<p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
									Avec <strong className="text-[#0A4D8C]">Synapsis</strong>, j'accompagne les dirigeants qui veulent optimiser et scaler leur activité sans sacrifier leur qualité de service.
								</p>
								<p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
									<strong className="text-[#F2D335]">Mon engagement :</strong> ROI mesurable sous 60 jours.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>


			{/* Footer épuré */}
			<footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-6">
				<div className="container mx-auto max-w-6xl">
					<div className="grid md:grid-cols-4 gap-8 mb-8">
						<div>
							<h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
								Synapsis
							</h4>
						</div>
						<div>
							<h4 className="font-semibold text-gray-900 dark:text-white mb-4">
								Contact
							</h4>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								synapsis.devis@gmail.com
							</p>
						</div>
						<div>
							<h4 className="font-semibold text-gray-900 dark:text-white mb-4">
								Réseau professionnel
							</h4>
							<a
								href="https://www.linkedin.com/in/frédéric-mallet-526426397/"
								target="_blank"
								rel="noopener noreferrer"
								className="space-y-7 text-gray-600 dark:text-gray-300 hover:text-[#069D14] transition-colors font-medium text-sm flex items-center gap-2"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
								LinkedIn
							</a>
							<a
							href="https://www.instagram.com/synaps_is/"
							target="_blank"
							rel="noopener noreferrer"
							className="pt-2 text-gray-600 dark:text-gray-300 hover:text-[#069D14] transition-colors font-medium text-sm flex items-center gap-2"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
								</svg>
							Instagram
							</a>
						</div>
						<div>
							<h4 className="font-semibold text-gray-900 dark:text-white mb-4">
								Légal
							</h4>
							<div className="space-y-2">
								<Link
									href="/mentions-legales"
									className="text-gray-600 dark:text-gray-300 hover:text-[#069D14] transition-colors font-medium text-sm flex items-center gap-2">
						Mentions légales
								</Link>
								<Link
									href="/politique-confidentialite"
									className="text-gray-600 dark:text-gray-300 hover:text-[#069D14] transition-colors font-medium text-sm flex items-center gap-2">
										Politique de confidentialité
								</Link>
							</div>
						</div>
					</div>
					<div className="text-center text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800 pt-8 text-sm">
						© 2024 Synapsis. Tous droits réservés.
					</div>
				</div>
			</footer>
		</div>
	);
}
