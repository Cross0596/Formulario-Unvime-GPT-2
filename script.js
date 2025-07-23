
document.getElementById("escuela").addEventListener("change", function() {
    const carreras = {
        "Ciencias de la Salud": [
            "Licenciatura en Enfermería",
            "Licenciatura en Kinesiología y Fisiatría",
            "Licenciatura en Obstetricia",
            "Ciclo Complementario para la Licenciatura en Actividad Fisica",
            "Medicina"
        ],
        "Gestión de Empresas y Economía": [
            "Licenciatura en Economía",
            "Licenciatura en Logistica",
            "Licenciatura en Diseño de Comunicación",
            "Tecnicatura Universitaria en Gestión Deportiva",
            "Tecnicatura Universitaria en Marketing Cultural y Deportivo"
        ],
        "Ingeniería y Ciencias Ambientales": [
            "Ingeniería en Sistemas de Información",
            "Ingeniería Agroindustria",
            "Bioingenieria",
            "Programador Univeristario de Sistemas",
            "Tecnicatura Superior en Gestión Ambiental",
            "Tecnicatura Univeristaria en Agroalimentos"
        ],
        "Ciencias Sociales y Educación": [
            "Profesorado de Educación Inicial",
            "Profesorado de Educación Primaria"
        ]
    };
    const selectCarrera = document.getElementById("carrera");
    const escuela = this.value;
    selectCarrera.innerHTML = '<option value="">Seleccionar</option>';
    if (escuela && carreras[escuela]) {
        carreras[escuela].forEach(c => {
            const opt = document.createElement("option");
            opt.value = c;
            opt.textContent = c;
            selectCarrera.appendChild(opt);
        });
    }
});
