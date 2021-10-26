using System;
using System.ComponentModel.DataAnnotations;

namespace PruebaTecnica.Models
{
    public class CandidatosEvaluados
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Cedula { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Apellido { get; set; }
        [Required]
        public DateTime FechaNacimiento { get; set; }
        public string TrabajoActual { get; set; }
        public double ExpectativaSalarial { get; set; }
        public string Observaciones { get; set; }

    }
}
