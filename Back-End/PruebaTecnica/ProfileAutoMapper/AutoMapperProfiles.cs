using AutoMapper;
using PruebaTecnica.DTOs;
using PruebaTecnica.Models;

namespace PruebaTecnica.ProfileAutoMapper
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<CandidatosEvaluados, CandidatoEvaluadoDTO>().ReverseMap();

            CreateMap<CandidatoEvaluadoCreateDTO, CandidatosEvaluados>();

            CreateMap<CandidatoEvaluadoUpdateDTO, CandidatosEvaluados>().ReverseMap();
        }
    }
}
