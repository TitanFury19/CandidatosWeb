using Microsoft.EntityFrameworkCore;
using PruebaTecnica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaTecnica.AplicatioDbContext
{
    public class AplicationDbContext:DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> dbContext)
    : base(dbContext)
        {

        }
        public DbSet<CandidatosEvaluados> CandidatosEvaluados { get; set; }
    }
}
