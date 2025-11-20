// src/i18n/footer.js

export const footerTranslations = {
    ro: {
        brand: {
            title: "George Popa Fotograf",
            description: "Fotografia este o amintire vie. Aceste umbre și culori transformă clipele în veșnicie.",
            note: "Contactează-mă din timp, astfel avem timp să gândim un scenariu ca în filmele de Hollywood: cu acțiune și multă voie bună."
        },
        quickLinks: {
            title: "Link-uri Utile",
            items: [
                { name: "Fotograf", path: "/ro" },
                { name: "Despre mine", path: "/ro/despre-mine" },
                { name: "Contact", path: "/ro/contact" },
                { name: "Botez", path: "/ro/botez" },
                { name: "Cununie", path: "/ro/nunta/cununie" },
                { name: "Trash the Dress", path: "/ro/nunta/trash-the-dress" },
                { name: "Maternitate", path: "/ro/sedinte/maternitate" },
                { name: "Nou-născuți", path: "/ro/sedinte/fotografie-nou-nascut" },
                { name: "Copii", path: "/ro/sedinte/copii" },
            ]
        },
        contact: {
            title: "Contact",
            phone: "+40 720 439 179",
            location: "Constanta, Romania",
            email: "me@georgepopa.photo"
        },
        social: {
            facebook: "Facebook",
            instagram: "Instagram"
        },
        footer: {
            copyright: "© 2025 George Popa Fotograf",
            seoKeywords: "Fotograf nunta, fotograf cununie, fotograf botez, fotografie studio, fotografie corporate, fashion studio, new-born, maternity (fotografie gravidute), artistic photography, fotograf Bucuresti, fotograf Constanta, fotograf Tulcea, fotograf profesionist, sedinte foto, sedinte foto de familie",
            anpcSal: "Solutionarea Alternativa a Litigiilor",
            anpcSol: "Solutionarea Online a Litigiilor"
        }
    },
    en: {
        brand: {
            title: "George Popa Photographer",
            description: "Photography is a living memory. These shadows and colors transform moments into eternity.",
            note: "Contact me in advance, so we have time to think of a scenario like in Hollywood movies: with action and lots of fun."
        },
        quickLinks: {
            title: "Quick Links",
            items: [
                { name: "Home", path: "/en" },
                { name: "About Me", path: "/en/about-me" },
                { name: "Contact", path: "/en/contact" },
                { name: "Baptism", path: "/en/baptism" },
                { name: "Marriage", path: "/en/wedding/marriage" },
                { name: "Trash the Dress", path: "/en/wedding/trash-the-dress" },
                { name: "Maternity", path: "/en/sessions/maternity" },
                { name: "Newborn", path: "/en/sessions/newborn" },
                { name: "Kids", path: "/en/sessions/kids" },
            ]
        },
        contact: {
            title: "Contact",
            phone: "+40 720 439 179",
            location: "Constanta, Romania",
            email: "me@georgepopa.photo"
        },
        social: {
            facebook: "Facebook",
            instagram: "Instagram"
        },
        footer: {
            copyright: "© 2025 George Popa Photographer",
            seoKeywords: "Wedding photographer, civil wedding photographer, baptism photographer, studio photography, corporate photography, fashion studio, newborn, maternity photography, artistic photography, Bucharest photographer, Constanta photographer, Tulcea photographer, professional photographer, photo sessions, family photo sessions",
            anpcSal: "Alternative Dispute Resolution",
            anpcSol: "Online Dispute Resolution"
        }
    }
};

export function getFooterTranslation(lang) {
    return footerTranslations[lang] || footerTranslations.ro;
}