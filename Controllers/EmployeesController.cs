using February2017.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace February2017.Controllers
{
    [Route("api/employees")]
    public class EmployeesController : Controller
    {
        private EmployeeContext context;

        public EmployeesController(EmployeeContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(context.Employees);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(context.Employees.Find(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody]Employee employee)
        {
            context.Employees.Add(employee);
            context.SaveChanges();

            var createdEmployee = context.Employees.FirstOrDefault(x => x.Email == employee.Email);
            return Created(string.Empty, createdEmployee);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Employee employee)
        {
            context.Entry(employee).State = EntityState.Modified;
            context.SaveChanges();

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var emp = context.Employees.Find(id);
            context.Remove(emp);
            context.SaveChanges();

            return NoContent();
        }
    }
}
