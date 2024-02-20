using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace VSMS.Models
{
    public partial class vsmsContext : DbContext
    {
        public vsmsContext()
        {
        }

        public vsmsContext(DbContextOptions<vsmsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Area> Areas { get; set; } = null!;
        public virtual DbSet<Brand> Brands { get; set; } = null!;
        public virtual DbSet<City> Cities { get; set; } = null!;
        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Facility> Facilities { get; set; } = null!;
        public virtual DbSet<Invoice> Invoices { get; set; } = null!;
        public virtual DbSet<Login> Logins { get; set; } = null!;
        public virtual DbSet<Packagedetail> Packagedetails { get; set; } = null!;
        public virtual DbSet<Rating> Ratings { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Securityquestion> Securityquestions { get; set; } = null!;
        public virtual DbSet<Servicecenter> Servicecenters { get; set; } = null!;
        public virtual DbSet<Serviceprogress> Serviceprogresses { get; set; } = null!;
        public virtual DbSet<Servicerequest> Servicerequests { get; set; } = null!;
        public virtual DbSet<Transaction> Transactions { get; set; } = null!;
        public virtual DbSet<Vehicle> Vehicles { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=vsms", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Area>(entity =>
            {
                entity.ToTable("area");

                entity.HasIndex(e => e.Cityid, "cityid_idx");

                entity.Property(e => e.Areaid).HasColumnName("areaid");

                entity.Property(e => e.Areaname)
                    .HasMaxLength(45)
                    .HasColumnName("areaname");

                entity.Property(e => e.Cityid).HasColumnName("cityid");

                entity.Property(e => e.Pincode).HasColumnName("pincode");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Areas)
                    .HasForeignKey(d => d.Cityid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("cityid");
            });

            modelBuilder.Entity<Brand>(entity =>
            {
                entity.ToTable("brands");

                entity.Property(e => e.Brandid).HasColumnName("brandid");

                entity.Property(e => e.Bname)
                    .HasMaxLength(45)
                    .HasColumnName("bname");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("city");

                entity.Property(e => e.Cityid).HasColumnName("cityid");

                entity.Property(e => e.Cityname)
                    .HasMaxLength(45)
                    .HasColumnName("cityname");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("customers");

                entity.HasIndex(e => e.Areaid, "aid_idx");

                entity.HasIndex(e => e.Loginid, "lid_idx");

                entity.Property(e => e.Customerid).HasColumnName("customerid");

                entity.Property(e => e.Areaid).HasColumnName("areaid");

                entity.Property(e => e.Birthdate)
                    .HasColumnType("datetime")
                    .HasColumnName("birthdate");

                entity.Property(e => e.Contactno)
                    .HasMaxLength(45)
                    .HasColumnName("contactno");

                entity.Property(e => e.Emailid)
                    .HasMaxLength(45)
                    .HasColumnName("emailid");

                entity.Property(e => e.Firstname)
                    .HasMaxLength(45)
                    .HasColumnName("firstname");

                entity.Property(e => e.Lane)
                    .HasMaxLength(45)
                    .HasColumnName("lane");

                entity.Property(e => e.Lastname)
                    .HasMaxLength(45)
                    .HasColumnName("lastname");

                entity.Property(e => e.Loginid).HasColumnName("loginid");

                entity.HasOne(d => d.Area)
                    .WithMany(p => p.Customers)
                    .HasForeignKey(d => d.Areaid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("aid");

                entity.HasOne(d => d.Login)
                    .WithMany(p => p.Customers)
                    .HasForeignKey(d => d.Loginid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("lid");
            });

            modelBuilder.Entity<Facility>(entity =>
            {
                entity.ToTable("facilities");

                entity.Property(e => e.Facilityid).HasColumnName("facilityid");

                entity.Property(e => e.Facilityname)
                    .HasMaxLength(45)
                    .HasColumnName("facilityname");
            });

            modelBuilder.Entity<Invoice>(entity =>
            {
                entity.ToTable("invoices");

                entity.HasIndex(e => e.Servicerequestid, "sreqstid_idx");

                entity.HasIndex(e => e.Transactionid, "trid_idx");

                entity.Property(e => e.Invoiceid).HasColumnName("invoiceid");

                entity.Property(e => e.Servicerequestid).HasColumnName("servicerequestid");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.Transactionid).HasColumnName("transactionid");

                entity.HasOne(d => d.Servicerequest)
                    .WithMany(p => p.Invoices)
                    .HasForeignKey(d => d.Servicerequestid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sreqstid");

                entity.HasOne(d => d.Transaction)
                    .WithMany(p => p.Invoices)
                    .HasForeignKey(d => d.Transactionid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("trid");
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.ToTable("login");

                entity.HasIndex(e => e.Questionid, "qid_idx");

                entity.HasIndex(e => e.Roleid, "rid_idx");

                entity.HasIndex(e => e.Userid, "userid_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Loginid).HasColumnName("loginid");

                entity.Property(e => e.Answer)
                    .HasMaxLength(45)
                    .HasColumnName("answer");

                entity.Property(e => e.Password)
                    .HasMaxLength(45)
                    .HasColumnName("password");

                entity.Property(e => e.Questionid).HasColumnName("questionid");

                entity.Property(e => e.Roleid).HasColumnName("roleid");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasColumnName("status")
                    .HasDefaultValueSql("'1'");

                entity.Property(e => e.Userid)
                    .HasMaxLength(45)
                    .HasColumnName("userid");

                entity.HasOne(d => d.Question)
                    .WithMany(p => p.Logins)
                    .HasForeignKey(d => d.Questionid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("qid");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Logins)
                    .HasForeignKey(d => d.Roleid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("rid");
            });

            modelBuilder.Entity<Packagedetail>(entity =>
            {
                entity.HasKey(e => e.Packagedetailsid)
                    .HasName("PRIMARY");

                entity.ToTable("packagedetails");

                entity.HasIndex(e => e.Servicecenterid, "sid_idx");

                entity.Property(e => e.Packagedetailsid).HasColumnName("packagedetailsid");

                entity.Property(e => e.Cost)
                    .HasPrecision(9, 2)
                    .HasColumnName("cost");

                entity.Property(e => e.Packagename)
                    .HasMaxLength(45)
                    .HasColumnName("packagename");

                entity.Property(e => e.Servicecenterid).HasColumnName("servicecenterid");

                entity.HasOne(d => d.Servicecenter)
                    .WithMany(p => p.Packagedetails)
                    .HasForeignKey(d => d.Servicecenterid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sid");

                entity.HasMany(d => d.Facilities)
                    .WithMany(p => p.Packages)
                    .UsingEntity<Dictionary<string, object>>(
                        "Package",
                        l => l.HasOne<Facility>().WithMany().HasForeignKey("Facilityid").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("fid"),
                        r => r.HasOne<Packagedetail>().WithMany().HasForeignKey("Packageid").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("pid"),
                        j =>
                        {
                            j.HasKey("Packageid", "Facilityid").HasName("PRIMARY").HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                            j.ToTable("packages");

                            j.HasIndex(new[] { "Facilityid" }, "fid_idx");

                            j.IndexerProperty<int>("Packageid").ValueGeneratedOnAdd().HasColumnName("packageid");

                            j.IndexerProperty<int>("Facilityid").HasColumnName("facilityid");
                        });
            });

            modelBuilder.Entity<Rating>(entity =>
            {
                entity.ToTable("ratings");

                entity.HasIndex(e => e.Customerid, "custid_idx");

                entity.HasIndex(e => e.Servicecenterid, "servcid_idx");

                entity.Property(e => e.Ratingid).HasColumnName("ratingid");

                entity.Property(e => e.Comment)
                    .HasMaxLength(45)
                    .HasColumnName("comment");

                entity.Property(e => e.Customerid).HasColumnName("customerid");

                entity.Property(e => e.Rating1).HasColumnName("rating");

                entity.Property(e => e.Servicecenterid).HasColumnName("servicecenterid");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Ratings)
                    .HasForeignKey(d => d.Customerid)
                    .HasConstraintName("custid");

                entity.HasOne(d => d.Servicecenter)
                    .WithMany(p => p.Ratings)
                    .HasForeignKey(d => d.Servicecenterid)
                    .HasConstraintName("servcid");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("roles");

                entity.Property(e => e.Roleid).HasColumnName("roleid");

                entity.Property(e => e.Rolename)
                    .HasMaxLength(45)
                    .HasColumnName("rolename");
            });

            modelBuilder.Entity<Securityquestion>(entity =>
            {
                entity.HasKey(e => e.Questionid)
                    .HasName("PRIMARY");

                entity.ToTable("securityquestions");

                entity.Property(e => e.Questionid).HasColumnName("questionid");

                entity.Property(e => e.Questiontext)
                    .HasMaxLength(45)
                    .HasColumnName("questiontext");
            });

            modelBuilder.Entity<Servicecenter>(entity =>
            {
                entity.ToTable("servicecenters");

                entity.HasIndex(e => e.Areaid, "aid_idx");

                entity.HasIndex(e => e.Brandid, "bid_idx");

                entity.HasIndex(e => e.Loginid, "lid_idx");

                entity.Property(e => e.Servicecenterid).HasColumnName("servicecenterid");

                entity.Property(e => e.Areaid).HasColumnName("areaid");

                entity.Property(e => e.Bookinglimit).HasColumnName("bookinglimit");

                entity.Property(e => e.Brandid).HasColumnName("brandid");

                entity.Property(e => e.Contactno)
                    .HasMaxLength(45)
                    .HasColumnName("contactno");

                entity.Property(e => e.Emailid)
                    .HasMaxLength(45)
                    .HasColumnName("emailid");

                entity.Property(e => e.Lane)
                    .HasMaxLength(45)
                    .HasColumnName("lane");

                entity.Property(e => e.Loginid).HasColumnName("loginid");

                entity.Property(e => e.Scname)
                    .HasMaxLength(45)
                    .HasColumnName("scname");

                entity.HasOne(d => d.Area)
                    .WithMany(p => p.Servicecenters)
                    .HasForeignKey(d => d.Areaid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("arid");

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.Servicecenters)
                    .HasForeignKey(d => d.Brandid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("bid");

                entity.HasOne(d => d.Login)
                    .WithMany(p => p.Servicecenters)
                    .HasForeignKey(d => d.Loginid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("loid");
            });

            modelBuilder.Entity<Serviceprogress>(entity =>
            {
                entity.ToTable("serviceprogress");

                entity.HasIndex(e => e.Servicerequestid, "srqid_idx");

                entity.Property(e => e.Serviceprogressid).HasColumnName("serviceprogressid");

                entity.Property(e => e.Checkin)
                    .HasColumnType("datetime")
                    .HasColumnName("checkin");

                entity.Property(e => e.Checkout)
                    .HasColumnType("datetime")
                    .HasColumnName("checkout");

                entity.Property(e => e.Delivered).HasColumnName("delivered");

                entity.Property(e => e.Servicerequestid).HasColumnName("servicerequestid");

                entity.Property(e => e.Stageone)
                    .HasColumnType("datetime")
                    .HasColumnName("stageone");

                entity.Property(e => e.Stagetwo)
                    .HasColumnType("datetime")
                    .HasColumnName("stagetwo");

                entity.HasOne(d => d.Servicerequest)
                    .WithMany(p => p.Serviceprogresses)
                    .HasForeignKey(d => d.Servicerequestid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("srqid");
            });

            modelBuilder.Entity<Servicerequest>(entity =>
            {
                entity.ToTable("servicerequests");

                entity.HasIndex(e => e.Packageid, "pkid_idx");

                entity.HasIndex(e => e.Servicecenterid, "sccid_idx");

                entity.HasIndex(e => new { e.Servicdate, e.Vehicleid, e.Packageid }, "servd_vehid_pkg_unique")
                    .IsUnique();

                entity.HasIndex(e => e.Vehicleid, "vid_idx");

                entity.Property(e => e.Servicerequestid).HasColumnName("servicerequestid");

                entity.Property(e => e.Bookingdate).HasColumnName("bookingdate");

                entity.Property(e => e.Packageid).HasColumnName("packageid");

                entity.Property(e => e.Pickuptime)
                    .HasColumnType("time")
                    .HasColumnName("pickuptime");

                entity.Property(e => e.Servicdate).HasColumnName("servicdate");

                entity.Property(e => e.Servicecenterid).HasColumnName("servicecenterid");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.Vehicleid).HasColumnName("vehicleid");

                entity.HasOne(d => d.Package)
                    .WithMany(p => p.Servicerequests)
                    .HasForeignKey(d => d.Packageid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("pkid");

                entity.HasOne(d => d.Servicecenter)
                    .WithMany(p => p.Servicerequests)
                    .HasForeignKey(d => d.Servicecenterid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sccid");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.Servicerequests)
                    .HasForeignKey(d => d.Vehicleid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("vid");
            });

            modelBuilder.Entity<Transaction>(entity =>
            {
                entity.ToTable("transactions");

                entity.HasIndex(e => e.Serviceprogressid, "serviceprogressid_idx");

                entity.Property(e => e.Transactionid).HasColumnName("transactionid");

                entity.Property(e => e.Amount)
                    .HasPrecision(9, 2)
                    .HasColumnName("amount");

                entity.Property(e => e.Date)
                    .HasColumnType("datetime")
                    .HasColumnName("date");

                entity.Property(e => e.Paymentmode)
                    .HasMaxLength(45)
                    .HasColumnName("paymentmode");

                entity.Property(e => e.Serviceprogressid).HasColumnName("serviceprogressid");

                entity.HasOne(d => d.Serviceprogress)
                    .WithMany(p => p.Transactions)
                    .HasForeignKey(d => d.Serviceprogressid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("serviceprogressid");
            });

            modelBuilder.Entity<Vehicle>(entity =>
            {
                entity.ToTable("vehicles");

                entity.HasIndex(e => e.Brandid, "brid_idx");

                entity.HasIndex(e => e.Customerid, "cuid_idx");

                entity.HasIndex(e => e.Vehiclenumber, "vehiclenumber_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Vehicleid).HasColumnName("vehicleid");

                entity.Property(e => e.Brandid).HasColumnName("brandid");

                entity.Property(e => e.Customerid).HasColumnName("customerid");

                entity.Property(e => e.Fueltype)
                    .HasMaxLength(45)
                    .HasColumnName("fueltype");

                entity.Property(e => e.Model)
                    .HasMaxLength(45)
                    .HasColumnName("model");

                entity.Property(e => e.Registrationyear).HasColumnName("registrationyear");

                entity.Property(e => e.Vehiclenumber)
                    .HasMaxLength(45)
                    .HasColumnName("vehiclenumber");

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.Vehicles)
                    .HasForeignKey(d => d.Brandid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("brid");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Vehicles)
                    .HasForeignKey(d => d.Customerid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("cuid");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
