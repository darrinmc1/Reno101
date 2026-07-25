#!/usr/bin/env python3
"""Generate 5 more Renos101 PDF templates (6-10) using fpdf2."""

from fpdf import FPDF
import os

# ── Constants (same brand colours) ──────────────────────────────────────
OUTPUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "public", "downloads"
)
os.makedirs(OUTPUT_DIR, exist_ok=True)

C_PRIMARY = (217, 119, 6)     # amber-600
C_SECONDARY = (245, 245, 245)
C_ACCENT = (251, 191, 36)     # amber-400
C_DARK = (30, 30, 30)
C_BORDER = (200, 200, 200)
C_WHITE = (255, 255, 255)
C_LIGHT_BG = (255, 251, 235)  # amber-50
C_GREEN = (22, 163, 74)
C_RED = (220, 38, 38)
C_BLUE = (37, 99, 235)


class RenosPDF(FPDF):
    """Base PDF with header / footer for all Renos101 templates."""

    def header(self):
        if self.page_no() > 1:
            self.set_font("Helvetica", "B", 9)
            self.set_text_color(*C_PRIMARY)
            self.cell(0, 6, "Renos101", align="L")
            self.set_font("Helvetica", "", 8)
            self.set_text_color(120, 120, 120)
            self.cell(0, 6, self.title, align="R")
            self.ln(4)
            self.set_draw_color(*C_BORDER)
            self.line(10, self.get_y(), 200, self.get_y())
            self.ln(4)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "", 7)
        self.set_text_color(150, 150, 150)
        self.cell(0, 10, f"Page {self.page_no()}/{{nb}}  |  Renos101  |  renos101.com", align="C")

    def section_title(self, title):
        self.set_font("Helvetica", "B", 13)
        self.set_text_color(*C_PRIMARY)
        self.cell(0, 8, title, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(*C_ACCENT)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(3)

    def field_label(self, label, x=None):
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(100, 100, 100)
        if x is not None:
            self.set_x(x)
        self.cell(0, 5, label, new_x="LMARGIN", new_y="NEXT")

    def field_line(self, label, width=180):
        self.field_label(label)
        y = self.get_y()
        self.set_draw_color(*C_BORDER)
        self.line(10, y + 5, 10 + width, y + 5)
        self.ln(8)

    def table_header(self, cols, widths):
        self.set_fill_color(*C_PRIMARY)
        self.set_text_color(*C_WHITE)
        self.set_font("Helvetica", "B", 8)
        for i, col in enumerate(cols):
            self.cell(widths[i], 7, col, border=0, fill=True, align="C")
        self.ln()
        self.set_text_color(*C_DARK)

    def table_row(self, cols, widths, fill=False):
        if fill:
            self.set_fill_color(*C_LIGHT_BG)
        else:
            self.set_fill_color(*C_WHITE)
        self.set_font("Helvetica", "", 8)
        for i, col in enumerate(cols):
            self.cell(widths[i], 6, str(col), border=0, fill=True, align="C" if i > 0 else "L")
        self.ln()


# ── 6. Permit Checklist Template ────────────────────────────────────────
def generate_permit_checklist():
    pdf = RenosPDF()
    pdf.alias_nb_pages()
    pdf.title = "Permit Checklist Template"
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(*C_PRIMARY)
    pdf.cell(0, 12, "Permit Checklist", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 6, "Track every permit required for your renovation from application to approval.", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)

    pdf.field_line("Project", 120)
    pdf.field_line("Address", 120)
    pdf.field_line("Date", 120)
    pdf.ln(2)

    # ── Permit checklist table ──
    pdf.section_title("Permit Register")

    cols = ["Permit Type", "Required?", "Jurisdiction", "Est. Cost", "Applied", "Approved", "Status", "Notes"]
    widths = [28, 16, 28, 20, 18, 18, 22, 40]
    total_w = sum(widths)
    x_start = (210 - total_w) / 2

    pdf.set_x(x_start)
    pdf.table_header(cols, widths)

    permit_data = [
        ("Building Permit", "Y", "City Council", "$1,200", "01-Aug-26", "", "Pending", "Main structure work"),
        ("Electrical Permit", "Y", "City Council", "$180", "", "", "Not Started", "Rough-in + final"),
        ("Plumbing Permit", "Y", "City Council", "$220", "02-Aug-26", "", "Pending", "Rough-in + final"),
        ("Demolition Permit", "N", "N/A", "$0", "", "", "N/A", "No structural demo"),
        ("Zoning / DA", "Y", "City Council", "$800", "15-Jul-26", "28-Jul-26", "Approved", "Development app."),
        ("Occupancy Cert.", "TBC", "City Council", "$350", "", "", "Not Started", "After final insp."),
        ("Heritage Approval", "N", "N/A", "$0", "", "", "N/A", "Not heritage-listed"),
        ("Encroachment", "N", "N/A", "$0", "", "", "N/A", "No boundary work"),
    ]

    for i, row in enumerate(permit_data):
        pdf.set_x(x_start)
        pdf.table_row(row, widths, fill=i % 2 == 0)

    # Summary
    pdf.ln(6)
    pdf.set_fill_color(*C_GREEN)
    pdf.set_text_color(*C_WHITE)
    pdf.set_font("Helvetica", "B", 9)
    approved_count = sum(1 for row in permit_data if row[6] == "Approved")
    pending_count = sum(1 for row in permit_data if row[6] == "Pending")
    pdf.cell(total_w, 7, f"  SUMMARY: {approved_count} approved | {pending_count} pending | 0 rejected", fill=True, align="L")
    pdf.ln(10)
    pdf.set_text_color(*C_DARK)

    pdf.set_font("Helvetica", "I", 8)
    pdf.set_text_color(120, 120, 120)
    pdf.multi_cell(0, 4,
        "Important: Never start work before permits are approved. "
        "Council inspections are required at key stages -- check your certifier for the inspection schedule. "
        "Keep approved permits on-site at all times."
    )

    path = os.path.join(OUTPUT_DIR, "permit-checklist-template.pdf")
    pdf.output(path)
    print(f"  * {path} ({os.path.getsize(path) / 1024:.0f} KB)")
    return path


# ── 7. Room-by-Room Planner Template ────────────────────────────────────
def generate_room_by_room_planner():
    pdf = RenosPDF()
    pdf.alias_nb_pages()
    pdf.title = "Room-by-Room Planner Template"
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(*C_PRIMARY)
    pdf.cell(0, 12, "Room-by-Room Planner", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 6, "Plan every room in detail so nothing is left to chance.", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)

    pdf.field_line("Project", 120)
    pdf.field_line("Date", 120)
    pdf.ln(2)

    # ── Room table ──
    pdf.section_title("Room Details")

    cols = ["Room", "Dimensions", "Purpose", "Floor Finish", "Wall Finish", "Lighting", "Fixtures", "Paint", "Budget", "Pri."]
    widths = [20, 18, 22, 20, 20, 18, 20, 16, 22, 14]
    total_w = sum(widths)
    x_start = (210 - total_w) / 2

    pdf.set_x(x_start)
    pdf.table_header(cols, widths)

    room_data = [
        ("Kitchen", "4.5x3.8m", "Cooking & dining", "Porcelain tiles", "Plaster paint", "LED downlights x8", "Sink, cooktop, range", "Warm white", "$14,000", "H"),
        ("Living Room", "5.2x4.5m", "Family lounge", "Engineered timber", "Plaster paint", "Track lights + lamp", "Fireplace, TV unit", "Soft grey", "$8,500", "H"),
        ("Master Bed", "4.0x3.6m", "Master bedroom", "Carpet", "Plaster paint", "Ceiling fan + lamp", "Built-in wardrobe", "Sage green", "$5,200", "M"),
        ("Bedroom 2", "3.5x3.2m", "Kids bedroom", "Carpet", "Plaster paint", "Ceiling light", "Wardrobe", "Sky blue", "$3,800", "M"),
        ("Bathroom", "2.8x2.4m", "Family bathroom", "Porcelain tiles", "Tiles + paint", "Vanity light + vent", "Shower, vanity, WC", "White", "$9,500", "H"),
        ("Laundry", "2.2x1.8m", "Laundry", "Vinyl", "Paint", "Fluorescent strip", "Tub, bench, cabinets", "White", "$2,800", "L"),
        ("Hallway", "3.0x1.2m", "Entry & passage", "Timber", "Paint", "Wall lights x3", "Hall table, mirror", "Warm white", "$1,200", "L"),
        ("Outdoor Deck", "4.0x3.0m", "Entertainment", "Decking boards", "N/A", "String lights", "BBQ area, seating", "N/A", "$4,000", "M"),
    ]

    for i, row in enumerate(room_data):
        pdf.set_x(x_start)
        pdf.table_row(row, widths, fill=i % 2 == 0)

    # Legend
    pdf.ln(6)
    pdf.set_font("Helvetica", "B", 8)
    pdf.set_text_color(*C_DARK)
    pdf.cell(0, 5, "Priority:  H = High (essential)  |  M = Medium (important)  |  L = Low (nice-to-have)", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(3)

    # Total budget
    pdf.set_fill_color(*C_ACCENT)
    pdf.set_font("Helvetica", "B", 9)
    total_budget = 14200 + 8500 + 5200 + 3800 + 9500 + 2800 + 1200 + 4000
    pdf.cell(0, 7, f"  TOTAL PLANNED BUDGET: ${total_budget:,}", fill=True, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)

    pdf.set_font("Helvetica", "I", 8)
    pdf.set_text_color(120, 120, 120)
    pdf.multi_cell(0, 4,
        "Tip: Complete this planner before you visit showrooms or order materials. "
        "Having one page per room keeps your vision consistent and helps contractors quote accurately."
    )

    path = os.path.join(OUTPUT_DIR, "room-by-room-planner.pdf")
    pdf.output(path)
    print(f"  * {path} ({os.path.getsize(path) / 1024:.0f} KB)")
    return path


# ── 8. Contractor Quote Comparison Template ─────────────────────────────
def generate_contractor_quote_comparison():
    pdf = RenosPDF()
    pdf.alias_nb_pages()
    pdf.title = "Contractor Quote Comparison Template"
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(*C_PRIMARY)
    pdf.cell(0, 12, "Contractor Quote Comparison", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 6, "Compare quotes side-by-side to find the best value, not just the lowest price.", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)

    pdf.field_line("Project", 120)
    pdf.field_line("Date", 120)
    pdf.ln(2)

    # ── Comparison table ──
    pdf.section_title("Quote Comparison (4 Contractors)")

    cols = ["Contractor", "Quote Amount", "Scope Included", "Exclusions", "Payment Schedule", "Insured?", "Warranty", "Start Date"]
    widths = [26, 22, 26, 24, 26, 16, 22, 28]
    total_w = sum(widths)
    x_start = (210 - total_w) / 2

    pdf.set_x(x_start)
    pdf.table_header(cols, widths)

    comparison_data = [
        ("Aussie Reno Pros", "$48,500", "Full scope inc. demo, framing, rough-in, finishes", "Appliances, landscaping", "10% deposit, 30% milestones, 60% on completion", "Yes", "5 yrs structural", "15-Sep-26"),
        ("BuildRight Const.", "$52,000", "Full scope + design adjustments", "Electrical fixtures, paint", "15% deposit, 35% mid, 50% final", "Yes", "6 yrs structural", "10-Sep-26"),
        ("QuickFix Homes", "$39,000", "Labour + materials (basic)", "Electrical, plumbing, appliances", "20% deposit, 40% mid, 40% final", "No", "2 yrs", "01-Oct-26"),
        ("Pinnacle Renos", "$55,000", "Full scope + premium finishes", "Landscaping, blinds", "10% deposit, 30% mid, 20% stage, 40% final", "Yes", "7 yrs structural", "08-Sep-26"),
    ]

    for i, row in enumerate(comparison_data):
        pdf.set_x(x_start)
        pdf.table_row(row, widths, fill=i % 2 == 0)

    # Recommendation
    pdf.ln(6)
    pdf.set_fill_color(*C_GREEN)
    pdf.set_text_color(*C_WHITE)
    pdf.set_font("Helvetica", "B", 9)
    pdf.cell(total_w, 7, "  RECOMMENDATION: Aussie Reno Pros -- Best value with full insurance and 5-year warranty", fill=True, align="L")
    pdf.ln(10)
    pdf.set_text_color(*C_DARK)

    # Checklist
    pdf.section_title("Pre-Hire Checklist")
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(80, 80, 80)
    checklist_items = [
        "[ ] Verify contractor licence is current",
        "[ ] Request certificate of insurance (public liability $5M+)",
        "[ ] Call 2 recent references",
        "[ ] Review contract terms and cancellation policy",
        "[ ] Confirm written quote matches scope of works",
        "[ ] Agree on variation process for changes",
        "[ ] Set payment milestones tied to completed work",
        "[ ] Document site photos before work begins",
    ]
    for item in checklist_items:
        pdf.cell(0, 5, f"    {item}", new_x="LMARGIN", new_y="NEXT")

    pdf.ln(4)
    pdf.set_font("Helvetica", "I", 8)
    pdf.set_text_color(120, 120, 120)
    pdf.multi_cell(0, 4,
        "Never pay more than 10-20% deposit. Tie progress payments to completed milestones, not calendar dates. "
        "Get everything in writing -- verbal promises are not enforceable."
    )

    path = os.path.join(OUTPUT_DIR, "contractor-quote-comparison.pdf")
    pdf.output(path)
    print(f"  * {path} ({os.path.getsize(path) / 1024:.0f} KB)")
    return path


# ── 9. Warranty Tracker Template ────────────────────────────────────────
def generate_warranty_tracker():
    pdf = RenosPDF()
    pdf.alias_nb_pages()
    pdf.title = "Warranty Tracker Template"
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(*C_PRIMARY)
    pdf.cell(0, 12, "Warranty Tracker", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 6, "Never miss a warranty claim -- track every appliance, fixture, and system.", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)

    pdf.field_line("Project / Address", 120)
    pdf.field_line("Homeowner", 120)
    pdf.field_line("Date", 120)
    pdf.ln(2)

    # ── Warranty table ──
    pdf.section_title("Warranty Register")

    cols = ["Item", "Brand / Model", "Installed", "Warranty", "Expiry", "Provider", "Contact", "Receipt?"]
    widths = [26, 28, 18, 20, 18, 26, 24, 16]
    total_w = sum(widths)
    x_start = (210 - total_w) / 2

    pdf.set_x(x_start)
    pdf.table_header(cols, widths)

    warranty_data = [
        ("Oven", "Bosch Serie 8 HBG7320", "Oct-26", "5 years", "Oct-31", "Bosch Appliances", "1800-BOSCH", "Y"),
        ("Cooktop", "Miele KM7897", "Oct-26", "5 years", "Oct-31", "Miele Australia", "1300-464-353", "Y"),
        ("Rangehood", "Westinghouse WRR614", "Oct-26", "2 years", "Oct-28", "Westinghouse", "1300-363-640", "Y"),
        ("Dishwasher", "Fisher & Paykel DD60", "Oct-26", "3 years", "Oct-29", "F&P Appliances", "1300-650-590", "Y"),
        ("Fridge", "Samsung RS65", "Sep-26", "5 years", "Sep-31", "Samsung Australia", "1300-362-603", "Y"),
        ("Washing Machine", "Bosch WAW28660", "Oct-26", "5 years", "Oct-31", "Bosch Appliances", "1800-BOSCH", "Y"),
        ("Dryer", "Bosch WTG86407", "Oct-26", "2 years", "Oct-28", "Bosch Appliances", "1800-BOSCH", "Y"),
        ("Hot Water System", "Rheem 310L", "Nov-26", "10 years", "Nov-36", "Rheem Australia", "1300-365-500", "Y"),
        ("Ducted AC", "Daikin 12kW", "Oct-26", "5 years", "Oct-31", "Daikin Australia", "1300-788-588", "Y"),
        ("Ceiling Fan x3", "Lucci Air DC", "Oct-26", "3 years", "Oct-29", "Beacon Lighting", "1300-175-990", "N"),
        ("Smoke Alarms", "Brooks S61000", "Oct-26", "10 years", "Oct-36", "Brooks Australia", "1800-802-088", "Y"),
        ("Tapware x6", "Phoenix Aura", "Oct-26", "15 years", "Oct-41", "Phoenix Tapware", "1300-660-307", "Y"),
    ]

    for i, row in enumerate(warranty_data):
        pdf.set_x(x_start)
        pdf.table_row(row, widths, fill=i % 2 == 0)

    # Summary
    pdf.ln(6)
    pdf.set_fill_color(*C_PRIMARY)
    pdf.set_text_color(*C_WHITE)
    pdf.set_font("Helvetica", "B", 9)
    pdf.cell(total_w, 7, f"  {len(warranty_data)} items tracked | {sum(1 for r in warranty_data if r[7] == 'Y')} receipts on file | Total value tracked", fill=True, align="L")
    pdf.ln(10)
    pdf.set_text_color(*C_DARK)

    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(0, 5, "Tips to protect your warranties:", new_x="LMARGIN", new_y="NEXT")
    tips = [
        "Register each product online within 30 days of installation.",
        "Scan and store all receipts digitally -- originals fade.",
        "Note warranty transfer rules if you sell the property.",
        "Schedule 'warranty expiring' reminders 30 days before each expiry.",
    ]
    for tip in tips:
        pdf.cell(0, 5, f"  >> {tip}", new_x="LMARGIN", new_y="NEXT")

    path = os.path.join(OUTPUT_DIR, "warranty-tracker-template.pdf")
    pdf.output(path)
    print(f"  * {path} ({os.path.getsize(path) / 1024:.0f} KB)")
    return path


# ── 10. Emergency Contact Sheet Template ────────────────────────────────
def generate_emergency_contact_sheet():
    pdf = RenosPDF()
    pdf.alias_nb_pages()
    pdf.title = "Emergency Contact Sheet Template"
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(*C_PRIMARY)
    pdf.cell(0, 12, "Emergency Contact Sheet", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 6, "Keep key contacts close -- emergencies don't wait for you to find the right number.", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)

    pdf.field_line("Project / Property", 120)
    pdf.field_line("Prepared by", 120)
    pdf.field_line("Date", 120)
    pdf.ln(2)

    # ── Contacts table ──
    pdf.section_title("Emergency Contacts")

    cols = ["Category", "Name", "Company", "Phone", "Email", "Notes"]
    widths = [30, 24, 32, 34, 40, 40]
    total_w = sum(widths)
    x_start = (210 - total_w) / 2

    pdf.set_x(x_start)
    pdf.table_header(cols, widths)

    contacts = [
        ("Plumber", "James Gallagher", "WaterWise Plumbing", "0422 333 444", "james@waterwise.com.au", "24/7 emergency call-out"),
        ("Electrician", "Sarah Chen", "SparkPro Electrical", "0411 222 333", "sarah@sparkpro.com.au", "Lic. 123456, after-hours ok"),
        ("Roofer", "Mike O'Brien", "TopSide Roofing", "0433 444 555", "mike@topsideroof.com.au", "Storm damage specialist"),
        ("Locksmith", "Tony Russo", "SecureKey Locks", "0444 555 666", "tony@securekey.com.au", "Sundays double rate"),
        ("HVAC", "David Kim", "AirFlow Solutions", "0455 666 777", "david@airflow.com.au", "AC breakdowns priority"),
        ("Handyman", "Carlos Mendez", "FixIt Services", "0466 777 888", "carlos@fixit.com.au", "Small jobs, no plumbing/elec"),
        ("Architect", "Emma Watson", "Studio DWG", "0477 888 999", "emma@studiodwg.com.au", "Site visits by appointment"),
        ("Structural Eng.", "Peter Zhao", "Core Strength Eng.", "0488 999 000", "peter@corestrength.com.au", "Urgent inspection 24hrs"),
        ("Pest Control", "Alex Turner", "BugOff Pest", "0490 111 222", "alex@bugoff.com.au", "Pre-reno inspection done"),
        ("Water Damage", "Emma Flood", "DryFast Restore", "0491 222 333", "emma@dryfast.com.au", "Mould remediation also"),
        ("Gas Fitter", "John Maxwell", "GasSafe Solutions", "0492 333 444", "john@gassafe.com.au", "Lic. 789012, gas certificates"),
        ("Council", "N/A", "City Council Building", "1300 555 666", "building@citycouncil.nsw.gov.au", "Permit enquiries M-F 9-5"),
    ]

    for i, row in enumerate(contacts):
        pdf.set_x(x_start)
        pdf.table_row(row, widths, fill=i % 2 == 0)

    # Important notes
    pdf.ln(6)
    pdf.set_fill_color(*C_RED)
    pdf.set_text_color(*C_WHITE)
    pdf.set_font("Helvetica", "B", 9)
    pdf.cell(total_w, 7, "  EMERGENCY: Call 000 for fire, ambulance, or immediate life-threatening situations", fill=True, align="L")
    pdf.ln(10)
    pdf.set_text_color(*C_DARK)

    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(0, 5, "Important:", new_x="LMARGIN", new_y="NEXT")
    items = [
        "Keep a printed copy on your fridge and save a digital copy to your phone.",
        "Verify all numbers are current before the renovation starts.",
        "Add your site supervisor's contact at the top of the list.",
        "Update this sheet whenever a contractor changes their number.",
    ]
    for item in items:
        pdf.cell(0, 5, f"  >> {item}", new_x="LMARGIN", new_y="NEXT")

    pdf.ln(4)
    pdf.set_font("Helvetica", "I", 8)
    pdf.set_text_color(120, 120, 120)
    pdf.multi_cell(0, 4,
        "Pro tip: Store a copy in your glovebox and with a neighbour. "
        "During a renovation, water and electrical emergencies are common -- having numbers at hand saves hours of panic."
    )

    path = os.path.join(OUTPUT_DIR, "emergency-contact-sheet.pdf")
    pdf.output(path)
    print(f"  * {path} ({os.path.getsize(path) / 1024:.0f} KB)")
    return path


# ── Main ─────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("\n=== Generating Renos101 PDF Templates (6-10) ===\n")
    generate_permit_checklist()
    generate_room_by_room_planner()
    generate_contractor_quote_comparison()
    generate_warranty_tracker()
    generate_emergency_contact_sheet()
    print("\n! All 5 new templates generated successfully!\n")
