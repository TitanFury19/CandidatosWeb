using System;

namespace PruebaTecnica.DTOs
{
    public class CandidatoEvaluadoUpdateDTO
    {
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string TrabajoActual { get; set; }
        public double ExpectativaSalarial { get; set; }
        public string Observaciones { get; set; }
    }
}
