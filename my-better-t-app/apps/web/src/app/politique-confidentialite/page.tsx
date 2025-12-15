"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PolitiqueConfidentialite() {
	return (
		<div className="min-h-screen bg-white dark:bg-gray-950">
			<nav className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-0 z-50">
				<div className="container mx-auto px-6 py-5">
					<div className="flex justify-between items-center">
						<Link href="/" className="text-3xl font-bold text-gray-900 dark:text-white hover:text-[#069D14] transition-colors">
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

			<section className="py-20 px-6">
				<div className="container mx-auto max-w-4xl">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
						Politique de Confidentialité
					</h1>
					
					<div className="space-y-8 text-gray-700 dark:text-gray-300">
						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								1. Introduction
							</h2>
							<p className="leading-relaxed">
								La présente politique de confidentialité a pour but de vous informer sur la manière dont Synapsis collecte, utilise et protège vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								2. Responsable du traitement
							</h2>
							<p className="mb-2">
								<strong>Nom :</strong> Synapsis
							</p>
							<p className="mb-2">
								<strong>Responsable :</strong> Frédéric Mallet
							</p>
							<p className="mb-2">
								<strong>Email :</strong>{" "}
								<a href="mailto:synapsis.devis@gmail.com" className="text-[#069D14] hover:underline">
									synapsis.devis@gmail.com
								</a>
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								3. Données collectées
							</h2>
							<p className="leading-relaxed mb-4">
								Nous collectons les données personnelles suivantes lorsque vous utilisez notre site ou nos services :
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Nom et prénom</li>
								<li>Adresse email</li>
								<li>Numéro de téléphone (si fourni)</li>
								<li>Nom de l'entreprise (si applicable)</li>
								<li>Informations fournies lors de la prise de rendez-vous</li>
								<li>Données de navigation (adresse IP, type de navigateur, pages visitées)</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								4. Finalités du traitement
							</h2>
							<p className="leading-relaxed mb-4">
								Vos données personnelles sont collectées et traitées pour les finalités suivantes :
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Gestion des demandes de contact et de rendez-vous</li>
								<li>Fourniture de nos services d'automatisation</li>
								<li>Communication commerciale et marketing (avec votre consentement)</li>
								<li>Amélioration de nos services</li>
								<li>Respect de nos obligations légales</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								5. Base légale du traitement
							</h2>
							<p className="leading-relaxed mb-4">
								Le traitement de vos données repose sur les bases légales suivantes :
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Votre consentement explicite</li>
								<li>L'exécution d'un contrat ou de mesures précontractuelles</li>
								<li>Le respect d'une obligation légale</li>
								<li>Notre intérêt légitime (amélioration des services, sécurité)</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								6. Durée de conservation
							</h2>
							<p className="leading-relaxed">
								Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, et conformément aux obligations légales applicables. En règle générale, les données sont conservées pendant 3 ans à compter du dernier contact avec vous, sauf obligation légale de conservation plus longue.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								7. Destinataires des données
							</h2>
							<p className="leading-relaxed mb-4">
								Vos données personnelles peuvent être transmises aux destinataires suivants :
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Personnel autorisé de Synapsis</li>
								<li>Prestataires techniques (hébergement, outils de gestion)</li>
								<li>Calendly (pour la gestion des rendez-vous)</li>
								<li>Autorités compétentes sur demande légale</li>
							</ul>
							<p className="leading-relaxed mt-4">
								Nous nous assurons que ces destinataires offrent des garanties suffisantes en matière de protection des données.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								8. Transferts de données hors UE
							</h2>
							<p className="leading-relaxed">
								Certains de nos prestataires peuvent être situés hors de l'Union Européenne. Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place (clauses contractuelles types, Privacy Shield, etc.) pour protéger vos données.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								9. Vos droits
							</h2>
							<p className="leading-relaxed mb-4">
								Conformément au RGPD, vous disposez des droits suivants :
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
								<li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
								<li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
								<li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
								<li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
								<li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
								<li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
							</ul>
							<p className="leading-relaxed mt-4">
								Pour exercer vos droits, contactez-nous à :{" "}
								<a href="mailto:synapsis.devis@gmail.com" className="text-[#069D14] hover:underline">
									synapsis.devis@gmail.com
								</a>
							</p>
							<p className="leading-relaxed mt-4">
								Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								10. Sécurité des données
							</h2>
							<p className="leading-relaxed">
								Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, destruction ou divulgation accidentelle. Cela inclut le chiffrement des données, l'accès sécurisé et la formation de notre personnel.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								11. Cookies et technologies similaires
							</h2>
							<p className="leading-relaxed">
								Notre site utilise uniquement des cookies techniques strictement nécessaires au fonctionnement du site. Nous n'utilisons pas de cookies de tracking ou de publicité sans votre consentement préalable.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								12. Modifications de la politique
							</h2>
							<p className="leading-relaxed">
								Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								13. Contact
							</h2>
							<p className="leading-relaxed">
								Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter à :{" "}
								<a href="mailto:synapsis.devis@gmail.com" className="text-[#069D14] hover:underline">
									synapsis.devis@gmail.com
								</a>
							</p>
						</div>
					</div>

					<div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
						<p className="text-sm text-gray-500 dark:text-gray-500">
							Dernière mise à jour : Décembre 2024
						</p>
					</div>
				</div>
			</section>

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