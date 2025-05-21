using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MT.Api.Model;

namespace MT.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("allowCors")]
    public class MTMasterController : ControllerBase
    {
        private readonly MTDbContext _context;

        public MTMasterController(MTDbContext context)
        {
            _context = context;
        }

        // GET: api/MTMaster
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MTData>>> GetMTs()
        {
            return await _context.MTData.ToListAsync();
        }

        // GET: api/MTMaster/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MTData>> GetMT(int id)
        {
            var mT = await _context.MTData.FindAsync(id);

            if (mT == null)
            {
                return NotFound();
            }

            return mT;
        }

        // PUT: api/MTMaster/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMT(int id, MTData mT)
        {
            if (id != mT.id)
            {
                return BadRequest();
            }

            _context.Entry(mT).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MTExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MTMaster
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MTData>> PostMT(MTData mT)
        {
            _context.MTData.Add(mT);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMT", new { id = mT.id }, mT);
        }

        // DELETE: api/MTMaster/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMT(int id)
        {
            var mT = await _context.MTData.FindAsync(id);
            if (mT == null)
            {
                return NotFound();
            }

            _context.MTData.Remove(mT);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MTExists(int id)
        {
            return _context.MTData.Any(e => e.id == id);
        }
    }
}
