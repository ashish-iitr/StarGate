using Microsoft.VisualStudio.TestTools.UnitTesting;
using SG.API.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SG.Tests
{
    [TestClass()]
    public class TestControllerTests
    {
        [TestMethod()]
        public void GetEmployeesTest()
        {
            TestController tc = new TestController();
            
            Assert.IsTrue(tc.GetEmployees().Count() == 3);
        }
    }
}