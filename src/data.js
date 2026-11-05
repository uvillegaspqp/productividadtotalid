export const MODULES = [
  ["dashboard","Dashboard Gerencial"],["ncr","Producto No Conforme"],["samples","Análisis de Muestras"],
  ["activities","Gestión Semanal del Equipo"],["projects","Gestión de Proyectos"],["logbook","Bitácora Técnica"],
  ["knowledge","Gestión del Conocimiento"],["instructions","Implementación de Instructivos"],["settings","Configuración"]
];
export const EMPTY_DB = {
  meta:{version:1,updatedAt:null},
  ncr:[], samples:[], activities:[], projects:[], logbook:[], knowledge:[], instructions:[],
  config:{
    team:["Jefe I+D","Analista I+D 1","Analista I+D 2"], products:[], processes:["Producción","Calidad","I+D","Mantenimiento","Gestión Ambiental"],
    categories:["Operacional","Técnica","Calidad","Proyecto","Capacitación"], priorities:["Baja","Media","Alta","Crítica"],
    targets:{weeklyCompliance:90,projectProgress:80}, demoLoaded:false
  }
};
export const FIELDS = {
  ncr:[
    ["code","Código del caso","text",true],["date","Fecha de identificación","date",true],["product","Producto","text",true],
    ["lot","Lote","text"],["process","Área o proceso de origen","select","processes"],["quantity","Cantidad involucrada","number"],
    ["description","Descripción de la desviación","textarea",true],["specification","Especificación incumplida","textarea"],
    ["analysisOwner","Responsable del análisis","select","team"],["rootCause","Investigación de causa raíz","textarea"],
    ["corrective","Acción correctiva","textarea"],["preventive","Acción preventiva","textarea"],["disposition","Disposición del producto","select",["Retener","Reprocesar","Reclasificar","Devolver","Destruir","Liberar con autorización","Pendiente"]],
    ["executionOwner","Responsable de ejecución","select","team"],["dueDate","Fecha compromiso","date"],["status","Estado","select",["Identificado","En investigación","En tratamiento","Pendiente de verificación","Cerrado"]],
    ["evidence","Evidencias / enlaces","text"],["observations","Observaciones","textarea"]
  ],
  samples:[
    ["code","Código de solicitud","text",true],["receivedAt","Fecha y hora de recepción","datetime-local",true],["type","Tipo de muestra","select",["PT","MP"],true],
    ["material","Producto o materia prima","text",true],["lot","Lote","text"],["requester","Solicitante","text"],["process","Proceso asociado","select","processes"],
    ["reason","Motivo del análisis","textarea"],["analyst","Analista responsable","select","team"],["startDate","Fecha de inicio","date"],["endDate","Fecha de finalización","date"],
    ["conclusion","Conclusión","textarea"],["status","Estado","select",["Recibida","Pendiente de análisis","En análisis","Pendiente de revisión","Finalizada"]]
  ],
  activities:[
    ["code","Código","text",true],["name","Nombre de la actividad","text",true],["description","Descripción","textarea"],["responsible","Responsable","select","team",true],
    ["process","Área o proceso","select","processes"],["category","Categoría","select","categories"],["priority","Prioridad","select","priorities"],
    ["assignedDate","Fecha de asignación","date"],["startDate","Fecha de inicio","date"],["dueDate","Fecha de compromiso","date",true],["endDate","Fecha de finalización","date"],
    ["status","Estado","select",["Pendiente","En ejecución","En espera","Finalizada","Cancelada"]],["progress","Porcentaje de avance","number"],
    ["expected","Resultado esperado","textarea"],["result","Resultado obtenido","textarea"],["observations","Observaciones","textarea"],["evidence","Evidencias / enlaces","text"],
    ["projectId","Proyecto relacionado","relation","projects"],["sourceLogId","Bitácora de origen","relation","logbook"],["unplanned","Actividad no planificada","checkbox"]
  ],
  projects:[
    ["code","Código","text",true],["name","Nombre del proyecto","text",true],["objective","Objetivo","textarea"],["justification","Justificación","textarea"],
    ["product","Producto relacionado","text"],["process","Proceso asociado","select","processes"],["leader","Líder","select","team"],["participants","Equipo participante","text"],
    ["startDate","Fecha de inicio","date"],["dueDate","Fecha estimada de finalización","date"],["budget","Presupuesto estimado","number"],["benefit","Beneficio esperado","textarea"],
    ["successMetric","Indicador de éxito","text"],["status","Estado","select",["Identificación de oportunidad","Planeación","Experimentación","Validación técnica","Prueba industrial","Implementación","Evaluación de resultados","Cerrado","Suspendido"]],
    ["progress","Porcentaje de avance","number"],["risks","Riesgos","textarea"],["observations","Observaciones","textarea"]
  ],
  logbook:[
    ["date","Fecha","date",true],["type","Tipo de registro","select",["Novedad operacional","Hallazgo técnico","Resultado experimental","Reunión técnica","Decisión gerencial","Seguimiento","Oportunidad de mejora"]],
    ["product","Producto","text"],["process","Proceso","select","processes"],["projectId","Proyecto asociado","relation","projects"],["ncrId","Caso no conforme","relation","ncr"],["sampleId","Muestra relacionada","relation","samples"],
    ["activityId","Actividad relacionada","relation","activities"],["description","Descripción de la novedad","textarea",true],["analysis","Análisis realizado","textarea"],
    ["decision","Decisión tomada","textarea"],["responsible","Responsable","select","team"],["commitment","Compromiso generado","textarea"],["followDate","Fecha de seguimiento","date"],
    ["status","Estado","select",["Abierto","En seguimiento","Cumplido","Cancelado"]],["conclusion","Conclusión","textarea"]
  ],
  knowledge:[
    ["code","Código","text",true],["title","Título","text",true],["category","Categoría","select",["Procesos productivos","Productos","Materias primas","Experimentación","Métodos analíticos","Solución de problemas","Mejoras implementadas","Lecciones aprendidas","Buenas prácticas"]],
    ["product","Producto o proceso","text"],["date","Fecha","date"],["author","Autor","select","team"],["problem","Problema u oportunidad","textarea"],["method","Metodología desarrollada","textarea"],
    ["activities","Actividades realizadas","textarea"],["results","Resultados","textarea"],["conclusions","Conclusiones","textarea"],["recommendations","Recomendaciones","textarea"],["documents","Documentos asociados","text"],["keywords","Palabras clave","text"],
    ["projectId","Proyecto de origen","relation","projects"]
  ],
  instructions:[
    ["code","Código","text",true],["name","Nombre del instructivo","text",true],["product","Producto o proceso","text"],["owner","Responsable de elaboración","select","team"],
    ["createdDate","Fecha de elaboración","date"],["version","Versión","text"],["docStatus","Estado documental","select",["Por elaborar","En elaboración","En revisión","Pendiente de aprobación","Aprobado","En capacitación","En implementación","Implementado","Pendiente de verificación"]],
    ["reviewer","Responsable de revisión","select","team"],["approver","Responsable de aprobación","select","team"],["approvalDate","Fecha de aprobación","date"],["implementationDate","Fecha de implementación","date"],
    ["targetPersonnel","Personal objetivo","text"],["trainingDone","Capacitación realizada","checkbox"],["trainedPeople","Personal capacitado (cantidad)","number"],["evaluation","Evaluación de comprensión","text"],
    ["verification","Verificación de aplicación","text"],["observations","Observaciones","textarea"]
  ]
};
export const TITLES = Object.fromEntries(MODULES);