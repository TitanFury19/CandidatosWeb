using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaTecnica.AplicatioDbContext;
using PruebaTecnica.DTOs;
using PruebaTecnica.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PruebaTecnica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatosEvaluadosController : ControllerBase
    {
        private readonly AplicationDbContext _context;
        private readonly IMapper _mapper;

        public CandidatosEvaluadosController(AplicationDbContext context,
                                             IMapper mapper)
        {
            this._context = context;
            this._mapper = mapper;
        }
        // GET: api/<CandidatosEvaluadosController>
        [HttpGet]
        public async Task <ActionResult<List<CandidatoEvaluadoDTO>>> Get()
        {
            var result=  await _context.CandidatosEvaluados.ToListAsync();

            return _mapper.Map<List<CandidatoEvaluadoDTO>>(result);

        }

        // POST api/<CandidatosEvaluadosController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] CandidatoEvaluadoCreateDTO candidatoEvaluadoCreateDTO)
        {

            try
            {
                var validateExistence = await ValidateExistence(candidatoEvaluadoCreateDTO);
                if (validateExistence)
                {
                    return BadRequest(new { message = $"El candidato con la cédula " + candidatoEvaluadoCreateDTO.Cedula + " ya se encuentra registrado" });
                }
                var result = _mapper.Map<CandidatosEvaluados>(candidatoEvaluadoCreateDTO);

                _context.Add(result);

                await _context.SaveChangesAsync();

                return Ok(new { message = "Candidato registrado con éxito" });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }


        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put( int id, CandidatoEvaluadoUpdateDTO candidatoEvaluadoUpdateDTO)
        {
            var result =await _context.CandidatosEvaluados.FirstOrDefaultAsync(c => c.Id == id);
            if (result==null)
            {
                return NotFound();
            }
            _mapper.Map(candidatoEvaluadoUpdateDTO, result);
            _context.Entry(result).State = EntityState.Modified;
             await _context.SaveChangesAsync();

            return Ok(new { message = "Candidato actualizado con éxito" });
        }

        // DELETE api/<CandidatosEvaluadosController>/5
        [HttpDelete("{id}")]
        public async Task <ActionResult> Delete(int id)
        {
            var result = await _context.CandidatosEvaluados.FindAsync(id);

            if (result==null)
            {
                return NotFound();
            }

            _context.CandidatosEvaluados.Remove(result);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Candidato eliminado con éxito"});
        }

        //Validar existencia de la cédula 
        async Task<bool> ValidateExistence(CandidatoEvaluadoCreateDTO candidatosEvaluados)
        {
            var ValidateExistence = await _context.CandidatosEvaluados.AnyAsync(o => o.Cedula == candidatosEvaluados.Cedula);
            return Convert.ToBoolean (ValidateExistence);
        }

    }
}
