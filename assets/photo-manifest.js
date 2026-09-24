(()=>{
  const farmSlugs={"Jaramillo":"jaramillo","El Velo":"el-velo","Cañas Verdes":"canas-verdes"};
  const lots=[
    ["Jaramillo","Manantial","manantial"],
    ["Jaramillo","Buenos Aires","buenos-aires"],
    ["Jaramillo","Bosque","bosque"],
    ["Jaramillo","Noria","noria"],
    ["Jaramillo","Mario Arriba","mario-arriba"],
    ["Jaramillo","Mario Abajo","mario-abajo"],
    ["Jaramillo","Reina","reina"],
    ["El Velo","Pinto","pinto"],
    ["El Velo","Valle Alto","valle-alto"],
    ["El Velo","Valle Loma","valle-loma"],
    ["El Velo","Aguila","aguila"],
    ["El Velo","Vista","vista"],
    ["El Velo","Mural","mural"],
    ["El Velo","Guabo","guabo"],
    ["El Velo","Laurina","laurina"],
    ["El Velo","SL 34","sl-34"],
    ["El Velo","Durazno","durazno"],
    ["El Velo","Higo","higo"],
    ["El Velo","Palmar","palmar"],
    ["El Velo","Porton","porton"],
    ["El Velo","Accesiones 1","accesiones-1"],
    ["El Velo","Accesiones 2","accesiones-2"],
    ["Cañas Verdes","Nido","nido"],
    ["Cañas Verdes","Eden","eden"],
    ["Cañas Verdes","Gigante","gigante"],
    ["Cañas Verdes","Montaña","montana"],
    ["Cañas Verdes","Tumaco","tumaco"],
    ["Cañas Verdes","Reserva Cabaña","reserva-cabana"],
    ["Cañas Verdes","Cabaña Arriba","cabana-arriba"],
    ["Cañas Verdes","Cabaña Abajo","cabana-abajo"],
    ["Cañas Verdes","León","leon"],
    ["Cañas Verdes","Lino","lino"],
    ["Cañas Verdes","Fundador","fundador"],
    ["Cañas Verdes","Coronado","coronado"],
    ["Cañas Verdes","Trapiche","trapiche"]
  ];
  window.LOCAL_PHOTOS={};
  lots.forEach(([farm,lot,lotSlug])=>{
    (window.LOCAL_PHOTOS[farm]||={})[lot]=[1,2,3].map(index=>
      `assets/photos/${farmSlugs[farm]}/${lotSlug}/0${index}.jpg`
    );
  });
})();
