export const today = () => new Date().toISOString().slice(0,10);
export const uid = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;
export const dateLabel = v => v ? new Date(`${v}T00:00:00`).toLocaleDateString("es-CO") : "—";
export const isOverdue = r => !!r.dueDate && r.dueDate < today() && !["Finalizada","Cancelada","Cerrado","Implementado","Cumplido"].includes(r.status || r.docStatus);
export const pct = (a,b) => b ? Math.round(a/b*100) : 0;
export const safeNum = v => Number.isFinite(Number(v)) ? Number(v) : 0;
export function csvExport(rows, filename){
  const cols = [...new Set(rows.flatMap(r=>Object.keys(r).filter(k=>!["history","id"].includes(k))))];
  const quote = v => `"${String(Array.isArray(v)?v.join("; "):v??"").replaceAll('"','""')}"`;
  const csv = [cols.map(quote).join(","),...rows.map(r=>cols.map(c=>quote(r[c])).join(","))].join("\r\n");
  const blob = new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=filename; a.click(); URL.revokeObjectURL(a.href);
}
export function downloadJSON(db){
  const blob=new Blob([JSON.stringify({...db,meta:{...db.meta,exportedAt:new Date().toISOString()}},null,2)],{type:"application/json"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`PQP_IDQA_respaldo_${today()}.json`; a.click(); URL.revokeObjectURL(a.href);
}
export function createDemo(){
 const now=today(), ago=n=>new Date(Date.now()-n*86400000).toISOString().slice(0,10), future=n=>new Date(Date.now()+n*86400000).toISOString().slice(0,10);
 const tag=(o)=>({...o,id:uid(),demo:true,history:[{at:new Date().toISOString(),by:"Sistema",action:"Creación de demostración"}]});
 return {
  ncr:[tag({code:"DEMO-NC-001",date:ago(12),product:"Producto demostración A",lot:"DEMO-LOTE-01",process:"Producción",quantity:250,description:"Desviación ficticia de demostración",specification:"Límite ilustrativo",analysisOwner:"Analista I+D 1",rootCause:"Causa simulada",corrective:"Acción simulada",disposition:"Retener",executionOwner:"Analista I+D 2",dueDate:future(3),status:"En investigación"})],
  samples:[tag({code:"DEMO-MU-001",receivedAt:ago(2)+"T09:00",type:"PT",material:"Producto demostración A",lot:"DEMO-LOTE-01",requester:"Solicitante demo",process:"Calidad",analyst:"Analista I+D 1",status:"En análisis",parameters:[{name:"pH",result:"3.2",min:"2",max:"4",unit:"",method:"Método demo"}]})],
  activities:[tag({code:"DEMO-AC-001",name:"Validar condición de proceso",description:"Actividad ficticia",responsible:"Analista I+D 1",process:"I+D",category:"Técnica",priority:"Alta",assignedDate:ago(3),dueDate:future(2),status:"En ejecución",progress:50,unplanned:false})],
  projects:[tag({code:"DEMO-PR-001",name:"Proyecto demostrativo de mejora",objective:"Ejemplo no real",leader:"Jefe I+D",startDate:ago(20),dueDate:future(30),status:"Experimentación",progress:35,product:"Producto demostración A"})],
  logbook:[tag({date:ago(1),type:"Hallazgo técnico",product:"Producto demostración A",process:"I+D",description:"Registro ficticio para mostrar la bitácora",responsible:"Jefe I+D",status:"Abierto"})],
  knowledge:[tag({code:"DEMO-CN-001",title:"Lección aprendida de demostración",category:"Lecciones aprendidas",product:"Producto demostración A",date:ago(1),author:"Jefe I+D",problem:"Ejemplo ficticio",method:"Método demostrativo",results:"Resultado ilustrativo"})],
  instructions:[tag({code:"DEMO-IN-001",name:"Instructivo de demostración",product:"Proceso demostrativo",owner:"Analista I+D 1",createdDate:ago(5),version:"0.1",docStatus:"En elaboración",trainingDone:false})]
 };
}