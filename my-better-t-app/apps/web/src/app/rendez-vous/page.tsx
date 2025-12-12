"use client";

import { CheckCircle2, Clock, Award, TrendingUp, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function RendezVousPage() {
	useEffect(() => {
		// Charger le script Calendly
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			// Cleanup
			if (document.body.contains(script)) {
				document.body.removeChild(script);
			}
		};
	}, []);

	return (
		<div className="min-h-screen bg-white dark:bg-gray-950">
			{/* Navigation */}
			<nav className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
				<div className="container mx-auto px-6 py-5">
					<div className="flex justify-between items-center">
						<Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-[#069D14] transition-colors">
							Synapsis
						</Link>
						<Link
							href="/"
							className="text-gray-600 dark:text-gray-300 hover:text-[#069D14] transition-colors font-medium flex items-center gap-2"
						>
							<ArrowLeft className="w-4 h-4" />
							Retour à l'accueil
						</Link>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
				<div className="container mx-auto max-w-4xl text-center">
					<div className="inline-block bg-[#069D14] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
						DERNIÈRE ÉTAPE
					</div>
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
						Réservez votre appel de <span className="text-[#069D14]">découverte</span>
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
						Félicitations pour cette décision ! Dans 30 minutes, nous échangerons sur vos processus chronophages et explorerons les opportunités d'automatisation qui s'offrent à vous.
					</p>
				</div>
			</section>

			{/* Points clés de l'audit */}
			<section className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
				<div className="container mx-auto max-w-6xl">
					<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
						Ce que vous allez obtenir
					</h2>
					<div className="grid md:grid-cols-2 gap-8 mb-12">
						<div className="flex gap-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-[#069D14]/10 rounded-xl flex items-center justify-center">
									<CheckCircle2 className="w-6 h-6 text-[#069D14]" />
								</div>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
									Discussion approfondie sur vos processus
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Nous échangeons sur vos tâches quotidiennes chronophages et identifions ensemble les processus qui vous font perdre du temps et de l'argent.
								</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-[#0A4D8C]/10 rounded-xl flex items-center justify-center">
									<TrendingUp className="w-6 h-6 text-[#0A4D8C]" />
								</div>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
									Identification des opportunités
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Discussion sur les gains potentiels et les axes d'amélioration prioritaires pour votre activité, sans engagement.
								</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-[#F2D335]/10 rounded-xl flex items-center justify-center">
									<Award className="w-6 h-6 text-[#F2D335]" />
								</div>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
									Proposition d'audit personnalisé
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Si pertinent, je vous propose un audit approfondi et chiffré de vos processus pour maximiser votre ROI.
								</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-[#069D14]/10 rounded-xl flex items-center justify-center">
									<Clock className="w-6 h-6 text-[#069D14]" />
								</div>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
									30 minutes chrono
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Un échange ciblé et efficace, 100% focalisé sur vos besoins et vos défis opérationnels actuels.
								</p>
							</div>
						</div>
					</div>

					{/* Widget Calendly */}
					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-12">
						<div className="text-center mb-8">
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
								Sélectionnez votre créneau
							</h2>
							<p className="text-gray-600 dark:text-gray-400">
								Vous recevrez une confirmation par email avec le lien de visioconférence
							</p>
						</div>
						<div
							className="calendly-inline-widget"
							data-url="https://calendly.com/synapsis-devis/15min"
							style={{ minWidth: '320px', height: '700px' }}
						></div>
					</div>

					{/* CTA vers Calendly */}
					<div className="bg-gradient-to-r from-[#069D14] to-[#0A4D8C] rounded-2xl p-8 text-center text-white mb-16">
						<h3 className="text-2xl font-bold mb-4">
							Prêt à transformer votre opérationnel ?
						</h3>
						<p className="text-lg mb-6 opacity-90">
							Choisissez le créneau qui vous convient le mieux ci-dessous
						</p>
						<div className="flex items-center justify-center gap-2">
							<CheckCircle2 className="w-5 h-5" />
							<span className="font-medium">Sans engagement</span>
							<span className="mx-2">•</span>
							<CheckCircle2 className="w-5 h-5" />
							<span className="font-medium">100% gratuit</span>
							<span className="mx-2">•</span>
							<CheckCircle2 className="w-5 h-5" />
							<span className="font-medium">100% actionnable</span>
						</div>
					</div>
				</div>
			</section>

			{/* Témoignage / Réassurance */}
			<section className="py-12 px-6 bg-white dark:bg-gray-950">
				<div className="container mx-auto max-w-4xl">
					<div className="text-center">
						<div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
							<div className="flex justify-center mb-4">
								{[1, 2, 3, 4, 5].map((star) => (
									<svg
										key={star}
										className="w-6 h-6 text-[#F2D335]"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>
							<p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
								"L'appel de découverte m'a ouvert les yeux sur des opportunités d'automatisation que je n'avais même pas envisagées. L'audit qui a suivi a permis de chiffrer précisément le ROI."
							</p>
							<p className="text-gray-600 dark:text-gray-400 font-medium">
								Thomas R., CEO - Agence Marketing
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer minimal */}
			<footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-6">
				<div className="container mx-auto max-w-6xl text-center">
					<p className="text-gray-600 dark:text-gray-400 text-sm">
						© 2024 Synapsis. Tous droits réservés.
					</p>
				</div>
			</footer>
		</div>
	);
}
