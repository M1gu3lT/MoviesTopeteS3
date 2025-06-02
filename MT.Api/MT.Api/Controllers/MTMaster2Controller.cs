using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MT.Api.Model;

namespace MT.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MTMaster2Controller : ControllerBase
    {
        private readonly MTDbContext _context;

        public MTMaster2Controller(MTDbContext context)
        {
            _context = context;
        }

        // GET: api/MTMaster2
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MTData>>> GetMTData()
        {
            return await _context.MTData.ToListAsync();
        }

        // GET: api/MTMaster2/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MTData>> GetMTData(int id)
        {
            var mTData = await _context.MTData.FindAsync(id);

            if (mTData == null)
            {
                return NotFound();
            }

            return mTData;
        }

        // PUT: api/MTMaster2/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMTData(int id, MTData mTData)
        {
            if (id != mTData.id)
            {
                return BadRequest();
            }

            _context.Entry(mTData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MTDataExists(id))
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

        // POST: api/MTMaster2
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MTData>> PostMTData(MTData mTData)
        {
            _context.MTData.Add(mTData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMTData", new { id = mTData.id }, mTData);
        }

        // DELETE: api/MTMaster2/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMTData(int id)
        {
            var mTData = await _context.MTData.FindAsync(id);
            if (mTData == null)
            {
                return NotFound();
            }

            _context.MTData.Remove(mTData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MTDataExists(int id)
        {
            return _context.MTData.Any(e => e.id == id);
        }
    }
}
