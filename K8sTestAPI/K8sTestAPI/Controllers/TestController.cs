using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Sockets;

namespace K8sTestAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {

        private readonly ILogger<TestController> _logger;

        public TestController(ILogger<TestController> logger)
        {
            _logger = logger;
        }

        public static string GetLocalIPAddress()
        {
            var host = Dns.GetHostEntry(Dns.GetHostName());
            foreach (var ip in host.AddressList)
            {
                if (ip.AddressFamily == AddressFamily.InterNetwork)
                {
                    return ip.ToString();
                }
            }
            throw new Exception("No network adapters with an IPv4 address in the system!");
        }

        [HttpGet]
        public string Get()
        {
            var ip = GetLocalIPAddress();
            return $"Doğuş Teknoloji K8s Eğitimi V2 ----> Host IP Address: {ip}";
        }
    }
}