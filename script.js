
document.getElementById("escuela").addEventListener("change", function() {
    const carreras = {
        "Ciencias de la Salud": [
            "Enfermería Universitaria",
            "Licenciatura en Kinesiología y Fisiatría"
        ],
        "Gestión de Empresas y Economía": [
            "Contador Público Nacional",
            "Licenciatura en Administración"
        ],
        "Ingeniería y Ciencias Ambientales": [
            "Ingeniería en Sistemas de Información",
            "Ingeniería Química",
            "Tecnicatura Universitaria en Energías Renovables"
        ],
        "Educación no presencial": [
            "Licenciatura en Gestión Educativa",
            "Tecnicatura Universitaria en Gestión y Administración de las Organizaciones"
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
