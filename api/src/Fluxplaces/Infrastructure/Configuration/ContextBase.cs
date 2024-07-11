using Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Configuration
{
	public class ContextBase : IdentityDbContext<ApplicationUser>
	{
		public ContextBase(DbContextOptions options) : base(options) { }

		#region DbSet

		#endregion

		#region Protected Methods

		protected override void OnModelCreating(ModelBuilder builder)
		{
			builder.Entity<ApplicationUser>().ToTable("AspNetUsers").HasKey(t => t.Id);

			base.OnModelCreating(builder);
		}
		#endregion

	}
}
