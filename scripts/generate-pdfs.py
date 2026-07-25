#!/usr/bin/env python3
"""Generate 5 downloadable Renos101 PDF templates using fpdf2."""

from fpdf import FPDF
import os

# ── Constants ──────────────────────────────────────────────────────────────
OUTPUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "public", "downloads"
)
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Brand colours (Renos101 -- warm amber / orange family)
C_PRIMARY = (217, 119, 6)     # amber-600
C_SECONDARY = (245, 245, 245) # light grey
C_ACCENT = (251, 191, 36)     # amber-400
C_DARK = (30, 30, 30)
C_BORDER = (200, 200, 200)
C_WHITE = (255, 255, 255)
C_LIGHT_BG = (255, 251, 235)  # amber-50
C_GREEN = (22, 163, 74)       # emerald-600


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
        """Print a grey field label."""
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(100, 100, 100)
        if x is not None:
            self.set_x(x)
        self.cell(0, 5, label, new_x="LMARGIN", new_y="NEXT")

    def field_line(self, label, width=180):
        """Print a label + underline for a form field."""
        self.field_label(label)
        y = self.get_y()
        self.set_draw_color(*C_BORDER)
        self.line(10, y + 5, 10 + width, y + 5)
        self.ln(8)

    def table_header(self, cols, widths):
        """Render a table header row with filled background."""
        self.set_fill_color(*C_PRIMARY)
        self.set_text_color(*C_WHITE)
        self.set_font("Helvetica", "B", 8)
        for i, col in enumerate(cols):
            self.cell(widths[i], 7, col, border=0, fill=True, align="C")
        self.ln()
        self.set_text_color(*C_DARK)

    def table_row(self, cols, widths, fill=False):
        """Render a table data row."""
        if fill:
            self.set_fill_color(*C_LIGHT_BG)
        else:
            self.set_fill_color(*C_WHITE)
        self.set_font("Helvetica", "", 8)
        for i, col in enumerate(cols):
            self.cell(widths[i], 6, str(col), border=0, fill=True, align="C" if i > 0 else "L")
        self.ln()

    def table_border_row(self, cols, widths, bold=False, fill_color=None):
        """Render a row with borders (for summary rows)."""
        if fill_color:
            self.set_fill_color(*fill_color)
        self.set_font("Helvetica", "B" if bold else "", 8)
        if bold:
            self.set_text_color(*C_DARK)
        for i, col in enumerate(cols):
            self.cell(widths[i], 7, str(col), border="T", fill=bool(fill_color), align="C" if i > 0 else "L")
        self.ln()
        self.set_text_color(*C_DARK)


# ── 1. Renovation Brief Template ──────────────────────────────────────────
def generate_renovation_brief():
    pdf = RenosPDF()
    pdf.alias_nb_pages()
    pdf.title = "Renovation Brief Template"
    pdf.add_page()

    # Cover area
    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(*C_PRIMARY)
    pdf.cell(0, 12, "Renovation Brief", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 6, "Get crystal clear on what you want before you talk to anyone.", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(8)

    # ── Section: Project Info ──
    pdf.section_title("1. Project Information")
    pdf.field_line("Project Name")
    pdf.field_line("Property Address")
    pdf.field_line("Property Type (House / Apartment / Townhouse / Other)")

    # ── Section: Scope of Work ──
    pdf.section_title("2. Scope of Work")
    pdf.field_label("Describe the work to be done (use extra paper if needed)")
    y = pdf.get_y()
    pdf.set_draw_color(*C_BORDER)
    for i in range(4):
        pdf.line(10, y + i * 6, 190, y + i * 6)
    pdf.set_y(y + 4 * 6 + 4)

    pdf.field_line("Rooms / Areas included")
    pdf.field_line("Structural changes? (Y / N)")

    # ── Section: Style & Preferences ──
    pdf.section_title("3. Style & Preferences")
    pdf.field_line("Preferred style (Modern / Traditional / Minimalist / Industrial / Other)")
    pdf.field_line("Colour palette / Theme")
    pdf.field_line("Must-have features")
    pdf.field_line("Nice-to-have features")

    # ── Section: Priorities ──
    pdf.section_title("4. Priorities")
    pdf.field_line("Top 3 priorities (e.g., budget, timeline, quality, sustainability)")
    pdf.field_line("Non-negotiables")

    # ── Section: Timeline & Budget ──
    pdf.section_title("5. Timeline & Budget")
    pdf.field_line("Desired start date")
    pdf.field_line("Desired completion date")
    pdf.field_line("Budget range ($)")
    pdf.field_line("Is the budget flexible? (Y / N / Partial)")

    # ── Section: Special Requirements ──
    pdf.section_title("6. Special Requirements")
    pdf.field_line("Access constraints (e.g., lift-only building, shared driveway)")
    pdf.field_line("Council / heritage restrictions")
    pdf.field_line("Living arrangements during renovation")
    pdf.field_line("Pets / children on site considerations")

    # ── Section: Signature ──
    pdf.section_title("7. Approval")
    pdf.field_line("Prepared by")
    pdf.field_line("Date")
    pdf.ln(4)
    pdf.set_font("Helvetica", "I", 8)
    pdf.set_text_color(120, 120, 120)
    pdf.multi_cell(0, 4,
        "Instructions: Complete this brief before contacting contractors or designers. "
        "Print one copy for your reference and share a copy with every quote request "
        "so all responses are directly comparable."
    )

    path = os.path.join(OUTPUT_DIR, "renovation-brief-template.pdf")
    pdf.output(path)
    print(f"  ✓ {path} ({os.path.getsize(path) / 1024:.0f} KB)")
    return path


# ── 2. Material Estimator Template ────────────────────────────────────────
def generate_material_estimator():
    pdf = RenosPDF()
    pdf.alias_nb_pages()
    pdf.title = "Material Estimator Template"
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(*C_PRIMARY)
    pdf.cell(0, 12, "Material Estimator", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 6, "Track every material, compare prices, and never buy twice.", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)

    # Project info
    pdf.field_line("Project", 120)
    pdf.field_line("Date", 120)

    # ── Material tracking table ──
    pdf.section_title("Materials")

    cols = ["Material", "Unit", "Qty", "Unit Price", "Total", "Supplier", "Notes"]
    widths = [30, 14, 12, 18, 18, 30, 38]
    total_w = sum(widths)
    # Centre the table
    x_start = (210 - total_w) / 2
    pdf.set_x(x_start)

    pdf.table_header(cols, widths)

    sample_data = [
        ["Gyprock plasterboard", "sheet", 20, 42.50, 850.00, "Bunnings", "Standard 10mm"],
        ["Timber studs (90x45)", "lm", 60, 6.80, 408.00, "TimberMart", "H2 treated"],
        ["Insulation R2.0", "m2", 45, 15.00, 675.00, "InsulPro", "Wall batts"],
        ["Pine flooring", "m2", 35, 85.00, 2975.00, "FloorCo", "Engineered"],
        ["Paint - interior", "L", 12, 48.00, 576.00, "Dulux", "Wash & Wear"],
        ["Skirting boards", "lm", 40, 4.50, 180.00, "Bunnings", "MDF primed"],
        ["Tiles - bathroom", "m2", 18, 62.00, 1116.00, "TileWorld", "600x600 porcelain"],
        ["Grout & adhesive", "kg", 10, 18.00, 180.00, "TileWorld", "Grey"],
        ["Screws/nails kit", "box", 2, 35.00, 70.00, "Bunnings", "Assorted pack"],
        ["Plywood (formwork)", "sheet", 6, 55.00, 330.00, "TimberMart", "17mm structural"],
    ]

    subtotal = 0
    for i, row in enumerate(sample_data):
        pdf.set_x(x_start)
        pdf.table_row(row, widths, fill=i % 2 == 0)
        subtotal += row[4]

    # Totals row
    pdf.set_x(x_start)
    pdf.set_draw_color(*C_PRIMARY)
    pdf.table_border_row(
        ["", "", "", "", "", "", ""], widths,
        fill_color=C_LIGHT_BG
    )
    pdf.set_x(x_start)
    pdf.table_border_row(
        ["", "", "", f"Subtotal: ${subtotal:,.2f}", "", "GST (10%):", f"${subtotal * 0.10:,.2f}"],
        widths, bold=True
    )
    pdf.set_x(x_start)
    pdf.table_border_row(
        ["", "", "", f"TOTAL: ${subtotal * 1.10:,.2f}", "", "", ""],
        widths, bold=True, fill_color=(251, 191, 36)
    )

    pdf.ln(8)
    pdf.set_font("Helvetica", "I", 8)
    pdf.set_text_color(120, 120, 120)
    pdf.multi_cell(0, 4,
        "Tip: Get quotes from at least 2 suppliers for each line item. "
        "Prices updated July 2026 -- always verify current pricing before budgeting."
    )

    path = os.path.join(OUTPUT_DIR, "material-estimator-template.pdf")
    pdf.output(path)
    print(f"  ✓ {path} ({os.path.getsize(path) / 1024:.0f} KB)")
    return path


# ── 3. Contractor Comparison Template ─────────────────────────────────────
def generate_contractor_comparison():
    pdf = RenosPDF()
    pdf.alias_nb_pages()
    pdf.title = "Contractor Comparison Template"
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(*C_PRIMARY)
    pdf.cell(0, 12, "Contractor Comparison", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 6, "Compare quotes side-by-side so you pick the right team, not just the cheapest.", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)

    pdf.field_line("Project", 120)
    pdf.field_line("Date", 120)

    # ── Comparison table ──
    pdf.section_title("Quote Comparison")

    cols = ["Contractor", "Licence #", "Quote Amount", "Scope Included", "Timeline", "Refs Checked", "Rating", "Notes"]
    widths = [28, 20, 22, 26, 20, 18, 14, 42]
    total_w = sum(widths)
    x_start = (210 - total_w) / 2

    pdf.set_x(x_start)
    pdf.table_header(cols, widths)

    sample_data = [
        ["Aussie Reno Pros", "LIC-45821", "$48,500", "Full scope incl. demo", "6-8 wks", "3/3 +ve", "4.8/5", "Recommended by neighbour"],
        ["BuildRight Const.", "LIC-33219", "$52,000", "Full scope", "5-7 wks", "2/2 +ve", "4.5/5", "20 yrs experience"],
        ["QuickFix Homes", "LIC-90134", "$39,000", "Lab+electrical excl.", "4-6 wks", "1/3 +ve", "3.2/5", "Cheapest but limited scope"],
        ["Pinnacle Renos", "LIC-77654", "$55,000", "Full scope + design", "7-9 wks", "3/3 +ve", "4.9/5", "Award-winning, premium"],
        ["Coastal Builders", "LIC-55890", "$45,000", "Full scope", "6-8 wks", "2/2 +ve", "4.6/5", "Good communication"],
    ]

    for i, row in enumerate(sample_data):
        pdf.set_x(x_start)
        pdf.table_row(row, widths, fill=i % 2 == 0)

    # Selection highlight
    pdf.ln(6)
    pdf.set_fill_color(*C_GREEN)
    pdf.set_text_color(*C_WHITE)
    pdf.set_font("Helvetica", "B", 10)
    pdf.cell(0, 8, "  RECOMMENDATION: Aussie Reno Pros -- Best balance of price, scope, and reputation", fill=True)
    pdf.ln(12)
    pdf.set_text_color(*C_DARK)
    pdf.set_font("Helvetica", "I", 8)
    pdf.set_text_color(120, 120, 120)
    pdf.multi_cell(0, 4,
        "Always check current licences, insurance certificates, and call at least 2 references. "
        "Ask about their cancellation policy and what happens if the timeline blows out."
    )

    path = os.path.join(OUTPUT_DIR, "contractor-comparison-template.pdf")
    pdf.output(path)
    print(f"  ✓ {path} ({os.path.getsize(path) / 1024:.0f} KB)")
    return path


# ── 4. Renovation Timeline Template ───────────────────────────────────────
def generate_renovation_timeline():
    pdf = RenosPDF()
    pdf.alias_nb_pages()
    pdf.title = "Renovation Timeline Template"
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(*C_PRIMARY)
    pdf.cell(0, 12, "Renovation Timeline", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 6, "Map every phase, task, and milestone so nothing falls through the cracks.", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)

    pdf.field_line("Project", 120)

    # ── Timeline table ──
    pdf.section_title("Phases & Tasks")

    cols = ["Phase", "Task", "Start", "End", "Duration", "Contractor", "Budget", "Status"]
    widths = [24, 34, 18, 18, 14, 30, 22, 20]
    total_w = sum(widths)
    x_start = (210 - total_w) / 2

    pdf.set_x(x_start)
    pdf.table_header(cols, widths)

    timeline_data = [
        # Phase 1: Planning & Design
        ("1. Planning", "Site measure & assessment", "01-Aug", "03-Aug", "3 days", "Owner", "$0", "Done"),
        ("", "Design consultation", "05-Aug", "08-Aug", "4 days", "DesignCo", "$2,500", "Done"),
        ("", "DA / Council submission", "10-Aug", "31-Aug", "3 wks", "Owner", "$800", "In Progress"),
        # Phase 2: Demolition
        ("2. Demolition", "Interior strip-out", "02-Sep", "05-Sep", "4 days", "Aussie Reno", "$3,500", "Pending"),
        ("", "Skip bin hire & waste", "02-Sep", "06-Sep", "5 days", "WasteCo", "$1,200", "Pending"),
        ("", "Asbestos check", "01-Sep", "01-Sep", "1 day", "SafeDemo", "$450", "Pending"),
        # Phase 3: Structure
        ("3. Structure", "Wall framing", "08-Sep", "12-Sep", "5 days", "Aussie Reno", "$4,800", "Pending"),
        ("", "Roof repairs", "08-Sep", "13-Sep", "6 days", "RoofPro", "$3,200", "Pending"),
        ("", "Window install", "14-Sep", "16-Sep", "3 days", "GlassCo", "$2,100", "Pending"),
        # Phase 4: Rough-In
        ("4. Rough-In", "Electrical rough-in", "17-Sep", "20-Sep", "4 days", "ElecPro", "$2,800", "Pending"),
        ("", "Plumbing rough-in", "17-Sep", "21-Sep", "5 days", "PlumbCo", "$3,600", "Pending"),
        ("", "HVAC ducting", "18-Sep", "21-Sep", "4 days", "AirFlow", "$2,200", "Pending"),
        # Phase 5: Finishes
        ("5. Finishes", "Plaster & cornice", "22-Sep", "26-Sep", "5 days", "Aussie Reno", "$3,800", "Pending"),
        ("", "Flooring install", "27-Sep", "01-Oct", "5 days", "FloorCo", "$4,500", "Pending"),
        ("", "Cabinetry & fit-out", "28-Sep", "04-Oct", "7 days", "CabCo", "$6,200", "Pending"),
        ("", "Painting", "05-Oct", "09-Oct", "5 days", "PaintPro", "$2,400", "Pending"),
        # Phase 6: Final
        ("6. Final", "Final electrical", "10-Oct", "11-Oct", "2 days", "ElecPro", "$1,200", "Pending"),
        ("", "Final plumbing", "10-Oct", "11-Oct", "2 days", "PlumbCo", "$1,000", "Pending"),
        ("", "Occupancy cert.", "14-Oct", "14-Oct", "1 day", "Council", "$350", "Pending"),
    ]

    phase_budgets = {}
    for row in timeline_data:
        phase = row[0].split(".")[-1].strip() if row[0] else ""
        budget_str = row[6].replace("$", "").replace(",", "")
        try:
            budget_val = float(budget_str)
            if phase:
                phase_budgets[phase] = phase_budgets.get(phase, 0) + budget_val
        except ValueError:
            pass

    for i, row in enumerate(timeline_data):
        if row[0]:
            # Phase header row
            pdf.set_x(x_start)
            pdf.set_fill_color(*C_LIGHT_BG)
            pdf.set_font("Helvetica", "B", 8)
            for j, cell in enumerate(row):
                pdf.cell(widths[j], 6, str(cell), fill=True, align="C" if j > 0 else "L")
            pdf.ln()
        else:
            pdf.set_x(x_start)
            pdf.table_row(row, widths, fill=i % 2 == 0)

    # Summary
    pdf.ln(4)
    pdf.set_x(x_start + 20)
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(*C_PRIMARY)
    for phase, budget in phase_budgets.items():
        pdf.cell(0, 5, f"  Phase {phase} budget: ${budget:,.0f}", new_x="LMARGIN", new_y="NEXT")
    total_budget_val = sum(phase_budgets.values())
    pdf.set_x(x_start + 20)
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(*C_DARK)
    pdf.cell(0, 7, f"  TOTAL PROJECT BUDGET: ${total_budget_val:,.0f}", new_x="LMARGIN", new_y="NEXT")

    pdf.ln(6)
    pdf.set_font("Helvetica", "I", 8)
    pdf.set_text_color(120, 120, 120)
    pdf.multi_cell(0, 4,
        "Update this timeline every week during the renovation. "
        "Flag any task that slips more than 2 days -- early warnings save thousands."
    )

    path = os.path.join(OUTPUT_DIR, "renovation-timeline-template.pdf")
    pdf.output(path)
    print(f"  ✓ {path} ({os.path.getsize(path) / 1024:.0f} KB)")
    return path


# ── 5. Budget Tracker Template ────────────────────────────────────────────
def generate_budget_tracker():
    pdf = RenosPDF()
    pdf.alias_nb_pages()
    pdf.title = "Budget Tracker Template"
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(*C_PRIMARY)
    pdf.cell(0, 12, "Budget Tracker", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 6, "Keep your renovation budget on track -- know exactly where every dollar goes.", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)

    pdf.field_line("Project", 120)
    pdf.field_line("Total Budget ($)", 120)
    pdf.ln(2)

    # ── Budget table ──
    pdf.section_title("Budget Breakdown")

    cols = ["Category", "Budgeted", "Actual Spent", "Variance", "% Complete", "Notes"]
    widths = [36, 30, 30, 30, 24, 40]
    total_w = sum(widths)
    x_start = (210 - total_w) / 2

    pdf.set_x(x_start)
    pdf.table_header(cols, widths)

    categories = [
        ("Design & Consultation",     5000,  3200,  -1800, "64%", "Architect & interior designer fees"),
        ("Materials",                 18000, 12450, -5550, "69%", "Tiles, timber, paint, hardware"),
        ("Labour & Trades",           15000, 8200,  -6800, "55%", "Builder, electrician, plumber"),
        ("Permits & Council",         2000,  1800,  -200,  "90%", "DA fee, occupancy cert, inspections"),
        ("Contingency (10%)",         4000,  950,   -3050, "24%", "Buffer for surprises -- use sparingly"),
        ("Miscellaneous",             1000,  620,   -380,  "62%", "Skip bins, parking permits, coffee"),
    ]

    total_budgeted = 0
    total_actual = 0
    for i, (cat, budgeted, actual, var, pct, notes) in enumerate(categories):
        pdf.set_x(x_start)
        pdf.table_row(
            [cat, f"${budgeted:,.0f}", f"${actual:,.0f}", f"${var:+,.0f}", pct, notes],
            widths, fill=i % 2 == 0
        )
        total_budgeted += budgeted
        total_actual += actual

    # Totals row
    total_var = total_budgeted - total_actual
    overall_pct = f"{total_actual / total_budgeted * 100:.0f}%" if total_budgeted else "0%"
    pdf.set_x(x_start)
    pdf.set_draw_color(*C_PRIMARY)
    pdf.set_fill_color(*C_ACCENT)
    pdf.set_font("Helvetica", "B", 9)
    pdf.cell(widths[0], 7, "TOTALS", border="T", fill=True)
    pdf.cell(widths[1], 7, f"${total_budgeted:,.0f}", border="T", fill=True, align="C")
    pdf.cell(widths[2], 7, f"${total_actual:,.0f}", border="T", fill=True, align="C")
    pdf.cell(widths[3], 7, f"${total_budgeted - total_actual:+,.0f}", border="T", fill=True, align="C")
    pdf.cell(widths[4], 7, overall_pct, border="T", fill=True, align="C")
    pdf.cell(widths[5], 7, "Under budget", border="T", fill=True, align="C")
    pdf.ln()

    # Remaining
    pdf.set_x(x_start)
    pdf.set_fill_color(*C_GREEN)
    pdf.set_text_color(*C_WHITE)
    pdf.set_font("Helvetica", "B", 10)
    remaining = total_budgeted - total_actual
    pdf.cell(total_w, 8, f"  REMAINING BUDGET: ${remaining:,.0f}", fill=True, align="L")
    pdf.ln(10)
    pdf.set_text_color(*C_DARK)

    # ── Spending tips ──
    pdf.section_title("Tips")
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(80, 80, 80)
    tips = [
        "Update actuals weekly -- don't wait until the category is maxed out.",
        "If a category hits 80%, pause and re-allocate from contingency or another category.",
        "The contingency should stay above 5% of total until the final punch list.",
        "Track every receipt, even the $12 one -- small costs add up fast.",
        "Compare variance across categories to spot where you're over or under-spending.",
    ]
    for tip in tips:
        pdf.cell(0, 5, f"  >> {tip}", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(3)

    pdf.set_font("Helvetica", "I", 8)
    pdf.set_text_color(120, 120, 120)
    pdf.multi_cell(0, 4,
        "Download the accompanying spreadsheet version (XLSX) for automatic calculations."
    )

    path = os.path.join(OUTPUT_DIR, "budget-tracker-template.pdf")
    pdf.output(path)
    print(f"  ✓ {path} ({os.path.getsize(path) / 1024:.0f} KB)")
    return path


# ── Main ───────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("\n=== Generating Renos101 PDF Templates ===\n")
    generate_renovation_brief()
    generate_material_estimator()
    generate_contractor_comparison()
    generate_renovation_timeline()
    generate_budget_tracker()
    print("\n✓ All 5 templates generated successfully!\n")
