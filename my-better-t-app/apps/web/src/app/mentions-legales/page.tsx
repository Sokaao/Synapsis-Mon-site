"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MentionsLegales() {
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
							Retour à l&apos;accueil
						</Link>
					</div>
				</div>
			</nav>

			<section className="py-20 px-6">
				<div className="container mx-auto max-w-4xl">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
						Mentions Légales
					</h1>
					
					<div className="space-y-8 text-gray-700 dark:text-gray-300">
						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								1. Identification de l&apos;éditeur
							</h2>
							<p className="mb-2">
								<strong>Raison sociale :</strong> Synapsis
							</p>
							<p className="mb-2">
								<strong>Forme juridique :</strong> Auto-entrepreneur (Entreprise Individuelle)
							</p>
							<p className="mb-2">
								<strong>Responsable de publication :</strong> Frédéric Mallet
							</p>
							<p className="mb-2">
								<strong>Siège social :</strong> 1 Impasse des frênes <br />
								15260 Neuvéglise-Sur-Truyère<br />
								France
							</p>
							<p className="mb-2">
								<strong>SIRET :</strong> 994 245 355 00015
							</p>
							{/* <p className="mb-2">
								<strong>Numéro de TVA intracommunautaire :</strong> [Si applicable]
							</p>*/}
							<p className="mb-2">
								<strong>Email :</strong>{" "}
								<a href="mailto:synapsis.devis@gmail.com" className="text-[#069D14] hover:underline">
									synapsis.devis@gmail.com
								</a>
							</p>
							<p className="mb-2">
								<strong>Téléphone :</strong> 07 54 08 32 58
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								2. Hébergement du site
							</h2>
							<p className="mb-4">Le site est hébergé par :</p>
							<p className="mb-2">
								<strong>Vercel Inc.</strong>
							</p>
							<p className="mb-2">
								340 S Lemon Ave #4133
							</p>
							<p className="mb-2">
								Walnut, CA 91789, États-Unis
							</p>
							<p className="mb-2">
								<strong>Site web :</strong>{" "}
								<a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#069D14] hover:underline">
									vercel.com
								</a>
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								3. Propriété intellectuelle
							</h2>
							<p className="leading-relaxed mb-4">
								L&apos;ensemble du contenu de ce site (structure, textes, logos, images, vidéos, sons, bases de données, logiciels, etc.) est protégé par le droit d&apos;auteur et appartient exclusivement à Synapsis ou à ses partenaires.
							</p>
							<p className="leading-relaxed mb-4">
								Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Synapsis.
							</p>
							<p className="leading-relaxed mb-4">
								Toute exploitation non autorisée du site ou de l&apos;un des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
							</p>
							<p className="leading-relaxed">
								<strong>Crédits :</strong> Les illustrations utilisées sur ce site proviennent de ressources libres de droits ou sous licence appropriée.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								4. Protection des données personnelles (RGPD)
							</h2>
							
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								4.1 Responsable du traitement
							</h3>
							<p className="leading-relaxed mb-4">
								Le responsable du traitement des données personnelles collectées sur ce site est Frédéric Mallet, représentant Synapsis.
							</p>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								4.2 Données collectées
							</h3>
							<p className="leading-relaxed mb-4">
								Les données personnelles collectées sur ce site sont les suivantes :
							</p>
							<ul className="list-disc list-inside space-y-2 mb-4 ml-4">
								<li>Nom et prénom</li>
								<li>Adresse email</li>
								<li>Numéro de téléphone (si fourni)</li>
								<li>Nom de l&apos;entreprise (si applicable)</li>
								<li>Message ou demande</li>
							</ul>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								4.3 Finalité du traitement
							</h3>
							<p className="leading-relaxed mb-4">
								Les données personnelles collectées sont utilisées exclusivement pour :
							</p>
							<ul className="list-disc list-inside space-y-2 mb-4 ml-4">
								<li>Répondre à vos demandes de contact</li>
								<li>Traiter vos demandes de rendez-vous</li>
								<li>Vous envoyer des informations relatives à nos services (avec votre consentement explicite)</li>
							</ul>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								4.4 Base légale
							</h3>
							<p className="leading-relaxed mb-4">
								Le traitement de vos données personnelles repose sur les bases légales suivantes :
							</p>
							<ul className="list-disc list-inside space-y-2 mb-4 ml-4">
								<li>Votre consentement explicite (formulaire de contact, newsletter)</li>
								<li>L&apos;exécution d&apos;un contrat ou de mesures précontractuelles</li>
								<li>L&apos;intérêt légitime de Synapsis (amélioration de nos services)</li>
							</ul>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								4.5 Destinataires des données
							</h3>
							<p className="leading-relaxed mb-4">
								Vos données personnelles sont destinées exclusivement à Synapsis. Elles ne sont en aucun cas transmises, vendues ou échangées avec des tiers à des fins commerciales.
							</p>
							<p className="leading-relaxed mb-4">
								Toutefois, nous pouvons être amenés à partager vos données avec des prestataires techniques pour le bon fonctionnement du site (hébergement, outils d&apos;emailing), sous réserve d&apos;engagements stricts de confidentialité.
							</p>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								4.6 Durée de conservation
							</h3>
							<p className="leading-relaxed mb-4">
								Vos données personnelles sont conservées pendant la durée strictement nécessaire à la finalité pour laquelle elles ont été collectées :
							</p>
							<ul className="list-disc list-inside space-y-2 mb-4 ml-4">
								<li>Demandes de contact : 3 ans à compter du dernier contact</li>
								<li>Clients : durée de la relation contractuelle + 5 ans (obligations légales comptables)</li>
								<li>Prospects non convertis : 3 ans maximum</li>
							</ul>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								4.7 Vos droits
							</h3>
							<p className="leading-relaxed mb-4">
								Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :
							</p>
							<ul className="list-disc list-inside space-y-2 mb-4 ml-4">
								<li><strong>Droit d&apos;accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
								<li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
								<li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
								<li><strong>Droit à la limitation :</strong> limiter le traitement de vos données dans certains cas</li>
								<li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
								<li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données pour des motifs légitimes</li>
								<li><strong>Droit de retirer votre consentement :</strong> à tout moment, sans affecter la licéité du traitement fondé sur le consentement effectué avant le retrait</li>
							</ul>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								4.8 Exercer vos droits
							</h3>
							<p className="leading-relaxed mb-4">
								Pour exercer vos droits, vous pouvez nous contacter à l&apos;adresse suivante :{" "}
								<a href="mailto:synapsis.devis@gmail.com" className="text-[#069D14] hover:underline">
									synapsis.devis@gmail.com
								</a>
							</p>
							<p className="leading-relaxed mb-4">
								Nous nous engageons à répondre à votre demande dans un délai maximum d&apos;un mois à compter de la réception de votre demande.
							</p>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								4.9 Réclamation
							</h3>
							<p className="leading-relaxed mb-4">
								Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d&apos;introduire une réclamation auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :
							</p>
							<p className="mb-2">
								<strong>CNIL</strong><br />
								3 Place de Fontenoy<br />
								TSA 80715<br />
								75334 PARIS CEDEX 07
							</p>
							<p className="mb-2">
								Site web :{" "}
								<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#069D14] hover:underline">
									www.cnil.fr
								</a>
							</p>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								4.10 Sécurité
							</h3>
							<p className="leading-relaxed">
								Synapsis met en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité et la confidentialité de vos données personnelles, notamment pour empêcher qu&apos;elles soient déformées, endommagées ou que des tiers non autorisés y aient accès.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								5. Cookies et technologies similaires
							</h2>
							
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								5.1 Qu&apos;est-ce qu&apos;un cookie ?
							</h3>
							<p className="leading-relaxed mb-4">
								Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d&apos;un site internet. Il permet de collecter des informations relatives à votre navigation et de vous proposer des services adaptés à votre terminal.
							</p>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								5.2 Cookies utilisés sur ce site
							</h3>
							<p className="leading-relaxed mb-4">
								Ce site utilise uniquement des cookies techniques strictement nécessaires au bon fonctionnement du site. Ces cookies ne nécessitent pas votre consentement préalable.
							</p>
							<p className="leading-relaxed mb-4">
								<strong>Cookies techniques :</strong>
							</p>
							<ul className="list-disc list-inside space-y-2 mb-4 ml-4">
								<li>Cookies de session (authentification, préférences d&apos;affichage)</li>
								<li>Cookies de sécurité</li>
							</ul>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								5.3 Gestion des cookies
							</h3>
							<p className="leading-relaxed mb-4">
								Vous pouvez à tout moment choisir de désactiver les cookies dans les paramètres de votre navigateur. Cependant, cela peut affecter votre expérience de navigation sur ce site.
							</p>
							<p className="leading-relaxed mb-4">
								Pour plus d&apos;informations sur la gestion des cookies :
							</p>
							<ul className="list-disc list-inside space-y-2 mb-4 ml-4">
								<li>Google Chrome : <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#069D14] hover:underline">aide cookies Chrome</a></li>
								<li>Firefox : <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-[#069D14] hover:underline">aide cookies Firefox</a></li>
								<li>Safari : <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#069D14] hover:underline">aide cookies Safari</a></li>
								<li>Edge : <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#069D14] hover:underline">aide cookies Edge</a></li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								6. Limitation de responsabilité
							</h2>
							
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								6.1 Contenu du site
							</h3>
							<p className="leading-relaxed mb-4">
								Synapsis s&apos;efforce d&apos;assurer au mieux de ses possibilités l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Synapsis ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition.
							</p>
							<p className="leading-relaxed mb-4">
								En conséquence, Synapsis décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
							</p>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								6.2 Disponibilité du site
							</h3>
							<p className="leading-relaxed mb-4">
								Synapsis ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site, et résultant soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications indiquées, soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
							</p>
							<p className="leading-relaxed mb-4">
								Synapsis ne pourra également être tenu responsable des dommages indirects consécutifs à l&apos;utilisation du site. L&apos;accès au site peut être suspendu ou interrompu à tout moment sans préavis pour des raisons de maintenance ou de cas de force majeure.
							</p>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								6.3 Virus et intrusions
							</h3>
							<p className="leading-relaxed">
								Synapsis ne pourra être tenu responsable de tout dommage causé par un virus, un cheval de Troie ou tout autre malware qui pourrait infecter votre ordinateur ou tout autre matériel en raison de votre accès, utilisation ou navigation sur ce site.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								7. Liens hypertextes
							</h2>
							
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								7.1 Liens sortants
							</h3>
							<p className="leading-relaxed mb-4">
								Le site peut contenir des liens hypertextes vers d&apos;autres sites internet. Synapsis ne dispose d&apos;aucun moyen pour contrôler ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité et leur politique de protection des données personnelles.
							</p>

							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
								7.2 Liens entrants
							</h3>
							<p className="leading-relaxed">
								Tout lien hypertexte vers le site doit faire l&apos;objet d&apos;une autorisation préalable écrite de Synapsis. Cette autorisation n&apos;est en aucun cas nécessaire pour les sites institutionnels (services publics, associations) qui souhaitent référencer notre site.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								8. Droit applicable et juridiction compétente
							</h2>
							<p className="leading-relaxed mb-4">
								Les présentes mentions légales sont régies par le droit français.
							</p>
							<p className="leading-relaxed mb-4">
								En cas de litige et à défaut d&apos;accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
							</p>
							<p className="leading-relaxed">
								Conformément à l&apos;article L.612-1 du Code de la consommation, en cas de litige, vous pouvez recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige. Vous pouvez contacter la plateforme de règlement en ligne des litiges de l&apos;Union européenne :{" "}
								<a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#069D14] hover:underline">
									https://ec.europa.eu/consumers/odr/
								</a>
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								9. Modification des mentions légales
							</h2>
							<p className="leading-relaxed">
								Synapsis se réserve le droit de modifier les présentes mentions légales à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Il est donc conseillé de consulter régulièrement cette page.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								10. Contact
							</h2>
							<p className="leading-relaxed mb-4">
								Pour toute question relative aux présentes mentions légales ou pour exercer vos droits, vous pouvez nous contacter :
							</p>
							<p className="mb-2">
								<strong>Par email :</strong>{" "}
								<a href="mailto:synapsis.devis@gmail.com" className="text-[#069D14] hover:underline">
									synapsis.devis@gmail.com
								</a>
							</p>
							<p className="mb-2">
								<strong>Par courrier :</strong><br />
								MALLET Frédéric<br />
								1 Impasse des frênes <br />
								15260 Neuvéglise-Sur-Truyère<br />
								France
							</p>
						</div>
					</div>

					<div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
						<p className="text-sm text-gray-500 dark:text-gray-500">
							Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
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