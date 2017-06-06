using SG.Common.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SG.API.Controllers
{
    [RoutePrefix("api/Test")]
    public class TestController : ApiController
    {
        [HttpPost]
        public string Hello()
        {
            return "Hello";
        }

        [HttpGet]
        [Route("GetEmployees")]
        // http://localhost:63107/api/Test/GetEmployees
        public List<Employee> GetEmployees()
        {
            List<Employee> lst = new List<Employee>();

            lst.Add(new Employee { EmpName = "abcd", Salary = 20000 });
            lst.Add(new Employee { EmpName = "defg", Salary = 70000 });
            lst.Add(new Employee { EmpName = "erty", Salary = 50000 });
            lst.Add(new Employee { EmpName = "hyui", Salary = 30000 });

            return lst;
        }
    }
}
