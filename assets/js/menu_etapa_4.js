
document.addEventListener("DOMContentLoaded", function(event) {
	const menu = document.querySelector("#menu");
	const footer = document.querySelector("#footer");
	const domain = "/DSW-LevinsonBonilla";
	// const domain = "";

	menu.innerHTML = 
				'<nav>'+
					'<ul>'+
					 ' <li class="li"><a href="'+domain+'/fase4/index.html">Inicio</a></li>'+
					  '<li class="li dropdown-m">'+
					    '<a href="javascript:void(0)" class="dropbtn">Temas</a>'+
					    '<div class="dropdown-m-content">'+
					     ' <a href="'+domain+'/fase4/paginas/fundamentos_css.html">Fundamentos de CSS</a>'+
					     ' <a href="'+domain+'/fase4/paginas/frameworks_css.html">Frameworks CSS</a>'+
					     ' <a href="'+domain+'/fase4/paginas/referencias_bibliograficas.html">Referencias Bibliográficas</a>'+
					    '</div>'+
					  '</li>'+
					 ' <li class="li dropdown-m">'+
					   ' <a href="javascript:void(0)" class="dropbtn">Recursos Multimedios</a>'+
					    '<div class="dropdown-m-content">'+
					    '  <a href="'+domain+'/fase4/paginas/multimedia_pagina1.html">Demostración CSS</a>'+
					    '  <a href="'+domain+'/fase4/paginas/multimedia_pagina2.html">Demostración Frameworks CSS</a>'+
					   ' </div>'+
					  '</li>'+
					  '<li class="li dropdown-m">'+
					    '<a href="javascript:void(0)" class="dropbtn">Aprendizaje</a>'+
					    '<div class="dropdown-m-content">'+
						'  <a href="'+domain+'/fase4/paginas/evaluacion_css.html">Evaluación CSS</a>'+
					    '  <a href="'+domain+'/fase4/paginas/evaluacion_frameworks.html">Evaluación Frameworks CSS</a>'+
					   '</div>'+
					  '</li>'+
					  '<li class="li"><a href="'+domain+'/fase4/paginas/seo.html">SEO y Media Queries</a></li>'+
					  '<li class="li"><a href="'+domain+'/fase4/paginas/autor.html">Autor</a></li>'+
					'</ul>'+
				'</nav>'  ;  

	footer.innerHTML =
				"Skype: levinson.bonilla <br>"+
		    	"Email: levinson.bonilla22@gmail.com <br>"+
		    	"Fecha: 25/10/2022";

});
