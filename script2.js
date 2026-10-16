async function saveSymptom() {
    const symptom = symptomInput.value.trim();

    if (symptom === "") {
        alert("fever");
        return;
    }

    try {
        await addDoc(
            collection(db, "symptoms"),
            {
                symptom: symptom,
                createdAt: new Date().toISOString()
            }
        );

        symptomInput.value = "";

        await getSymptoms();

    } catch (error) {
        console.error("Error saving symptom:", error);
    }
}

window.saveSymptom = saveSymptom;

async function getSymptoms() {
    try {
        const querySnapshot = await getDocs(
            collection(db, "symptoms")
        );

        const symptoms = querySnapshot.docs.map(function(document) {
            return {
                id: document.id,
                symptom: document.data().symptom
            };
        });

        symptomList.innerHTML = symptoms.map(function(item) {
            return "<li>" + item.symptom +
                ' <button onclick="deleteSymptom(\'' +
                item.id + "')\">Delete</button></li>";
        }).join("");

    } catch (error) {
        console.error("Error getting symptoms:", error);
    }
}

async function deleteSymptom(id) {
    try {
        await deleteDoc(
            doc(db, "symptoms", id)
        );

        await getSymptoms();

    } catch (error) {
        console.error("Error deleting symptom:", error);
    }
}

window.deleteSymptom = deleteSymptom;


// Load saved symptoms when the page opens

getSymptoms();