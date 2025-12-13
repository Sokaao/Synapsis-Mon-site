"use client";

import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, Zap, Users, TrendingUp, Sparkles, Bot, Workflow } from "lucide-react";
import Link from "next/link";

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
						<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
							Synapsis
						</h1>
						<div className="hidden md:flex gap-8 items-center">
							<button
								onClick={() => scrollToSection("services")}
								className="text-gray-600 dark:text-gray-300 hover:text-[#069D14] transition-colors font-medium text-sm"
							>
								Solutions
							</button>
							<button
								onClick={() => scrollToSection("methode")}
								className="text-gray-600 dark:text-gray-300 hover:text-[#0A4D8C] transition-colors font-medium text-sm"
							>
								Méthode
							</button>
							<button
								onClick={() => scrollToSection("qui-suis-je")}
								className="text-gray-600 dark:text-gray-300 hover:text-[#F2D335] transition-colors font-medium text-sm"
							>
								Expertise
							</button>
							<Link
								href="/rendez-vous"
								className="border-2 border-[#069D14] text-[#069D14] hover:bg-[#069D14] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 group"
							>
								Rendez-vous Gratuit
								<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
							</Link>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section épurée */}
			<section id="accueil" className="min-h-screen flex items-center px-6 relative overflow-hidden">
				<div className="container mx-auto max-w-6xl">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="relative z-10">
							<h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
								Libérez <span className="text-[#069D14]">8h par semaine</span> grâce à l'automatisation{" "}
								<span className="text-[#0A4D8C]">intelligente.</span>
							</h2>
							<p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
								Dirigeants et entrepreneurs : pendant que vous lisez ceci, vos équipes perdent un temps précieux sur des tâches répétitives. Transformons ce temps perdu en croissance mesurable.
							</p>
							<Link
								href="/rendez-vous"
								className="bg-[#069D14] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#058a12] transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl"
							>
								Prendre rendez-vous
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</Link>

							{/* Section "Ils nous font confiance" */}
							{/*<div className="mt-16">*/}
								{/*<p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
									Déjà adoptée par
								</p>
								<div className="flex gap-8 items-center opacity-40">
									<div className="text-2xl font-bold text-gray-400">PME</div>
									<div className="text-2xl font-bold text-gray-400">Agences</div>
									<div className="text-2xl font-bold text-gray-400">Scale-ups</div>
								</div>
							</div>*/}
						</div>

						{/* Image côté droit avec effet de débordement */}
						<div className="hidden md:block relative">
							<div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
								<img
									src="/images/hero-automation.jpg"
									alt="Automatisation intelligente"
									className="w-full h-full object-cover"
								/>
								{/* Overlay avec gradient */}
								<div className="absolute inset-0 bg-gradient-to-tr from-[#069D14]/20 to-[#0A4D8C]/20"></div>
								{/* Badge flottant */}
								<div className="absolute bottom-8 left-8 bg-white dark:bg-gray-900 px-6 py-4 rounded-2xl shadow-xl">
									<p className="text-sm text-gray-600 dark:text-gray-400">Gain moyen</p>
									<p className="text-3xl font-bold text-[#069D14]">8h/semaine</p>
								</div>
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
				LE VRAI COÛT DE L'INACTION
			</div>
			<h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
				Le vrai coût de l'inaction
			</h3>
			<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
				Pendant que vous lisez ceci, vos équipes perdent du temps et de l'argent. Voici ce que ça coûte vraiment.
			</p>
		</div>

		{/* Grille des 3 chiffres */}
		<div className="grid md:grid-cols-3 gap-8 mb-12">
			{/* Chiffre 1 - Temps perdu */}
			<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
				<div className="mb-4">
					<div className="text-7xl font-bold text-red-600 mb-3">
						60%
					</div>
					<p className="text-xl text-gray-900 dark:text-white font-semibold mb-3">
						du temps perdu en tâches répétitives
					</p>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Vos équipes ne sont productives que 39% du temps
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
						jours gaspillés par employé/an
					</p>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						2 mois complets de travail sans valeur ajoutée
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
						13K€
					</div>
					<p className="text-xl text-gray-900 dark:text-white font-semibold mb-3">
						perdus par employé sans automatisation
					</p>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						132 000€ pour une équipe de 10 personnes
					</p>
				</div>
				<div className="pt-4 border-t border-gray-200 dark:border-gray-700">
					<p className="text-xs text-gray-500 dark:text-gray-500">Source : Workplace Stats, 2025</p>
				</div>
			</div>
		</div>

		{/* CTA Box avec urgence */}
		<div className="bg-gradient-to-r from-[#069D14]/10 to-[#0A4D8C]/10 border-2 border-[#069D14] rounded-2xl p-8 md:p-10 text-center">
			<p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
				Pendant que vous lisez ceci, vos concurrents automatisent.
			</p>
			<p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
				<strong className="text-[#069D14]">66% des entreprises</strong> ont déjà franchi le pas.
			</p>
			<Link
				href="/rendez-vous"
				className="inline-flex items-center gap-2 bg-[#069D14] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#058a12] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
			>
				<span>Rejoignez les leaders dès aujourd'hui</span>
				<ArrowRight className="w-5 h-5" />
			</Link>
			<p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
				✓ Audit gratuit ✓ 30 minutes ✓ Résultats immédiats
			</p>
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
							L'IA au service de{" "}
							<span className="text-[#069D14]">votre rentabilité.</span>
						</h3>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							Chaque processus automatisé, c'est du temps et de l'argent récupérés. Chaque erreur évitée, c'est un client satisfait de plus. Voici comment nous transformons votre opérationnel.
						</p>
					</div>

					{/* Galerie horizontale scrollable */}
					<div
						ref={galleryRef}
						className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
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
							<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
								<li className="flex items-start gap-2">
									<span className="text-[#069D14] mt-0.5">•</span>
									<span>Prospection intelligente par IA</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#069D14] mt-0.5">•</span>
									<span>Scoring automatique des leads</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#069D14] mt-0.5">•</span>
									<span>Relances personnalisées</span>
								</li>
							</ul>
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
								Expérience Client Premium
							</h4>
							<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
								<li className="flex items-start gap-2">
									<span className="text-[#0A4D8C] mt-0.5">•</span>
									<span>Support client 24/7 par IA</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#0A4D8C] mt-0.5">•</span>
									<span>Onboarding automatisé</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#0A4D8C] mt-0.5">•</span>
									<span>Suivi proactif NPS</span>
								</li>
							</ul>
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
								Back-Office Sans Friction
							</h4>
							<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
								<li className="flex items-start gap-2">
									<span className="text-[#F2D335] mt-0.5">•</span>
									<span>Facturation instantanée</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#F2D335] mt-0.5">•</span>
									<span>Relances de paiement auto</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#F2D335] mt-0.5">•</span>
									<span>Reporting temps réel</span>
								</li>
							</ul>
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
								Marketing ROI-Driven
							</h4>
							<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
								<li className="flex items-start gap-2">
									<span className="text-[#069D14] mt-0.5">•</span>
									<span>Campagnes omnicanales pilotées data</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#069D14] mt-0.5">•</span>
									<span>Lead nurturing intelligent</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#069D14] mt-0.5">•</span>
									<span>Analytics prédictifs</span>
								</li>
							</ul>
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
								Assistants IA sur-mesure
							</h4>
							<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
								<li className="flex items-start gap-2">
									<span className="text-[#0A4D8C] mt-0.5">•</span>
									<span>Agents IA formés à votre métier</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#0A4D8C] mt-0.5">•</span>
									<span>Qualification automatique</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#0A4D8C] mt-0.5">•</span>
									<span>Réponses instantanées 24/7</span>
								</li>
							</ul>
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
								Écosystème Unifié
							</h4>
							<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
								<li className="flex items-start gap-2">
									<span className="text-[#F2D335] mt-0.5">•</span>
									<span>Synchronisation CRM, ERP</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#F2D335] mt-0.5">•</span>
									<span>Source de vérité unique</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#F2D335] mt-0.5">•</span>
									<span>Zéro saisie manuelle</span>
								</li>
							</ul>
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
							<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
								<li className="flex items-start gap-2">
									<span className="text-[#069D14] mt-0.5">•</span>
									<span>Prospection intelligente par IA</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#069D14] mt-0.5">•</span>
									<span>Scoring automatique des leads</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#069D14] mt-0.5">•</span>
									<span>Relances personnalisées</span>
								</li>
							</ul>
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
								Expérience Client Premium
							</h4>
							<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
								<li className="flex items-start gap-2">
									<span className="text-[#0A4D8C] mt-0.5">•</span>
									<span>Support client 24/7 par IA</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#0A4D8C] mt-0.5">•</span>
									<span>Onboarding automatisé</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#0A4D8C] mt-0.5">•</span>
									<span>Suivi proactif NPS</span>
								</li>
							</ul>
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
								Back-Office Sans Friction
							</h4>
							<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
								<li className="flex items-start gap-2">
									<span className="text-[#F2D335] mt-0.5">•</span>
									<span>Facturation instantanée</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#F2D335] mt-0.5">•</span>
									<span>Relances de paiement auto</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#F2D335] mt-0.5">•</span>
									<span>Reporting temps réel</span>
								</li>
							</ul>
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
								Marketing ROI-Driven
							</h4>
							<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
								<li className="flex items-start gap-2">
									<span className="text-[#069D14] mt-0.5">•</span>
									<span>Campagnes omnicanales pilotées data</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#069D14] mt-0.5">•</span>
									<span>Lead nurturing intelligent</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#069D14] mt-0.5">•</span>
									<span>Analytics prédictifs</span>
								</li>
							</ul>
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
								Assistants IA sur-mesure
							</h4>
							<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
								<li className="flex items-start gap-2">
									<span className="text-[#0A4D8C] mt-0.5">•</span>
									<span>Agents IA formés à votre métier</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#0A4D8C] mt-0.5">•</span>
									<span>Qualification automatique</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#0A4D8C] mt-0.5">•</span>
									<span>Réponses instantanées 24/7</span>
								</li>
							</ul>
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
								Écosystème Unifié
							</h4>
							<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
								<li className="flex items-start gap-2">
									<span className="text-[#F2D335] mt-0.5">•</span>
									<span>Synchronisation CRM, ERP</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#F2D335] mt-0.5">•</span>
									<span>Source de vérité unique</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#F2D335] mt-0.5">•</span>
									<span>Zéro saisie manuelle</span>
								</li>
							</ul>
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
								<div className="absolute top-8 right-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl">
									<p className="text-sm text-gray-600 dark:text-gray-400">Durée</p>
									<p className="text-3xl font-bold text-[#0A4D8C]">30 min</p>
								</div>
								<div className="absolute bottom-8 left-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl">
									<p className="text-sm text-gray-600 dark:text-gray-400">Taux de satisfaction</p>
									<p className="text-3xl font-bold text-[#F2D335]">98%</p>
								</div>
							</div>
						</div>

						<div className="order-2">
							<div className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
								APPEL DE DÉCOUVERTE GRATUIT
							</div>
							<h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
								Identifiez vos processus{" "}
								<span className="text-[#069D14]">chronophages</span> en 30 minutes.
							</h3>
							<p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
								Échange stratégique pour comprendre vos processus actuels. Nous discutons de vos tâches répétitives, identifions les opportunités d'automatisation, et je vous propose un audit approfondi si pertinent. Sans engagement, 100% sur-mesure.
							</p>
							<Link
								href="/rendez-vous"
								className="border-2 border-[#069D14] text-[#069D14] hover:bg-[#069D14] hover:text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group"
							>
								Réserver mon appel découverte
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
							NOTRE APPROCHE
						</div>
						<h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
							De l'audit au ROI en{" "}
							<span className="text-[#0A4D8C]">3 étapes clés.</span>
						</h3>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							Méthodologie éprouvée, déploiement rapide, résultats mesurables. Pas de buzzwords, que du concret qui impacte directement votre compte de résultat.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
								1
							</div>
							<h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								Compréhension
							</h4>
							<p className="text-gray-600 dark:text-gray-400">
								Analyse approfondie de vos workflows. Identification des quick wins et des opportunités stratégiques. Projection ROI chiffrée sur 12 mois.
							</p>
						</div>

						<div className="text-center">
							<div className="w-16 h-16 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
								2
							</div>
							<h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								Transformation
							</h4>
							<p className="text-gray-600 dark:text-gray-400">
								Mise en production par vagues. Formation hands-on de vos équipes. Adoption garantie grâce à un accompagnement terrain.
							</p>
						</div>

						<div className="text-center">
							<div className="w-16 h-16 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
								3
							</div>
							<h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								Croissance
							</h4>
							<p className="text-gray-600 dark:text-gray-400">
								Monitoring des KPIs, ajustements basés sur la data réelle, évolutions selon vos besoins. Votre ROI ne fait qu'augmenter.
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
							Impact mesurable dès les 60 premiers jours
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
									<strong className="text-[#069D14]">Frédéric Mallet</strong>, passionné d’automatisation et d’IA appliquée. Depuis 6 mois, je me forme intensivement sur n8n, les appels API et les agents IA pour créer des systèmes simples, fiables et vraiment utiles. Après avoir accompagné mes premiers clients (PME, agences, business locaux), j’ai développé une conviction :
<em> l’automatisation n’est pas un luxe, c’est un levier pour gagner du temps et respirer dans son activité.</em>
								</p>
								<p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
									Avec <strong className="text-[#0A4D8C]">Synapsis</strong>, je mets cette expertise au service des dirigeants qui veulent passer à l'échelle sans sacrifier leur marge ni leur qualité de service.
								</p>
								<p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
									<strong className="text-[#F2D335]">Mon engagement :</strong> ROI mesurable sous 90 jours, ou on continue jusqu'à l'obtenir. Zéro jargon technique, 100% résultats.
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
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								Automatisation stratégique pour dirigeants ambitieux
							</p>
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
								className="text-gray-600 dark:text-gray-400 hover:text-[#069D14] transition-colors text-sm inline-flex items-center gap-2"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
								LinkedIn
							</a>
						</div>
						<div>
							<h4 className="font-semibold text-gray-900 dark:text-white mb-4">
								Légal
							</h4>
							<div className="space-y-2">
								<p className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer text-sm">
									Mentions légales
								</p>
								<p className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer text-sm">
									Politique de confidentialité
								</p>
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
