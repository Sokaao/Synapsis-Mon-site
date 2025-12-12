import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();
		const { nom, prenom, email, besoin } = data;

		// Validation basique
		if (!nom || !prenom || !email || !besoin) {
			return NextResponse.json(
				{ error: "Tous les champs sont requis" },
				{ status: 400 }
			);
		}

		// Validation de l'email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Email invalide" },
				{ status: 400 }
			);
		}

		// Ici, tu peux ajouter l'envoi d'email, l'enregistrement en base de données, etc.
		// Pour l'instant, on logue juste les données
		console.log("Nouvelle demande d'audit:", {
			nom,
			prenom,
			email,
			besoin,
			date: new Date().toISOString(),
		});

		// TODO: Implémenter l'envoi d'email
		// TODO: Sauvegarder en base de données
		// TODO: Intégrer avec un CRM (Make, Zapier, etc.)

		return NextResponse.json(
			{
				success: true,
				message: "Demande d'audit reçue avec succès",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Erreur lors du traitement de la demande:", error);
		return NextResponse.json(
			{ error: "Erreur serveur" },
			{ status: 500 }
		);
	}
}
