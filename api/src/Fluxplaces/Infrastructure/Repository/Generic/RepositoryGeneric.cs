using Domain.Interfaces.Generic;
using Infrastructure.Configuration;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repository.Generic
{
	public class RepositoryGeneric<T> : IGeneric<T> where T : class
	{
		private readonly ContextBase _context;

		public RepositoryGeneric(ContextBase context)
		{
			_context = context ?? throw new ArgumentNullException(nameof(context));
		}

		public async Task Add(T entity)
		{
			await _context.Set<T>().AddAsync(entity);
			await _context.SaveChangesAsync();
		}

		public async Task Update(T entity)
		{
			_context.Set<T>().Update(entity);
			_context.SaveChanges();
		}

		public async Task Delete(T entity)
		{
			_context.Set<T>().Remove(entity);
			_context.SaveChanges();
		}

		public async Task<List<T>> GetAll()
		{
			return await _context.Set<T>().ToListAsync();
		}

		public async Task<T> GetById(int id)
		{
			return await _context.Set<T>().FindAsync(id);
		}
	}

}
