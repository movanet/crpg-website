#!/bin/bash

# CRPG Website Migration Validation Script
# Compares https://crpg.info vs https://movanet.github.io/crpg-website

echo "================================================"
echo "CRPG WEBSITE MIGRATION VALIDATION"
echo "================================================"
echo "Source: https://crpg.info"
echo "Target: https://movanet.github.io/crpg-website"
echo "Date: $(date)"
echo "================================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Counters
TOTAL=0
SUCCESS=0
FAILED=0

# Function to check URL
check_url() {
    local path=$1
    local full_url="https://movanet.github.io/crpg-website$path"
    
    TOTAL=$((TOTAL + 1))
    
    # Check if URL returns 200
    if curl -Is "$full_url" 2>/dev/null | head -1 | grep -q "200"; then
        echo -e "${GREEN}✓${NC} $path"
        SUCCESS=$((SUCCESS + 1))
        return 0
    else
        echo -e "${RED}✗${NC} $path (404)"
        FAILED=$((FAILED + 1))
        return 1
    fi
}

# Function to check with content validation
check_url_content() {
    local path=$1
    local content=$2
    local full_url="https://movanet.github.io/crpg-website$path"
    
    TOTAL=$((TOTAL + 1))
    
    # Check if URL returns 200 and contains expected content
    response=$(curl -s "$full_url" 2>/dev/null)
    if echo "$response" | grep -q "$content"; then
        echo -e "${GREEN}✓${NC} $path (content verified)"
        SUCCESS=$((SUCCESS + 1))
        return 0
    else
        echo -e "${RED}✗${NC} $path (content missing: $content)"
        FAILED=$((FAILED + 1))
        return 1
    fi
}

echo "1. CHECKING MAIN SECTIONS"
echo "========================="
check_url "/"
check_url "/profile/"
check_url "/program/"
check_url "/research/"
check_url "/publications/"
check_url "/events/"
check_url "/gallery/"
check_url "/contact/"
echo ""

echo "2. CHECKING PROGRAM PAGES"
echo "========================="
check_url "/swa-mam-catalytic-program/"
check_url "/ehrdd/"
check_url "/koneksi/"
check_url "/merkuri/"
check_url "/wash/"
check_url "/pcb/"
check_url "/aiira/"
echo ""

echo "3. CHECKING TEAM MEMBERS"
echo "========================"
check_url "/team/"
check_url "/team/mohamad-mova/"
check_url "/team/dyah-paramita/"
check_url "/team/aftaf-muhajir/"
check_url "/team/jibriel-avessina/"
check_url "/team/feril-hariat/"
check_url "/team/nishrin/"
check_url "/team/budi-susety/"
check_url "/team/richo-wibowo/"
check_url "/team/muhammad-maulana/"
check_url "/team/mulia-nurhasan/"
check_url "/team/lina-rospita/"
check_url "/team/andi-mariyasa-septiari/"
echo ""

echo "4. CHECKING CONTENT INTEGRITY"
echo "=============================="
check_url_content "/" "Center for Regulation, Policy and Governance"
check_url_content "/profile/" "Legal Entity"
check_url_content "/team/mohamad-mova/" "Water Law"
echo ""

echo "5. CHECKING ASSETS"
echo "=================="
# Check if logo loads
if curl -Is "https://movanet.github.io/crpg-website/images/crpg-logo.png" 2>/dev/null | head -1 | grep -q "200"; then
    echo -e "${GREEN}✓${NC} Logo loads correctly"
else
    echo -e "${RED}✗${NC} Logo not found"
fi

# Check partner logos
for logo in WRI-300x193.png SWA-Logo.png unicef.jpg bappenas.png; do
    if curl -Is "https://movanet.github.io/crpg-website/images/$logo" 2>/dev/null | head -1 | grep -q "200"; then
        echo -e "${GREEN}✓${NC} Partner logo: $logo"
    else
        echo -e "${RED}✗${NC} Partner logo missing: $logo"
    fi
done
echo ""

echo "6. CHECKING BROKEN LINKS"
echo "========================"
# Check for known problematic links
check_url "/research/climate-adaptation-coastal/" || echo "  └─> Known issue: Research page not created"
echo ""

echo "================================================"
echo "VALIDATION SUMMARY"
echo "================================================"
echo "Total URLs checked: $TOTAL"
echo -e "Successful: ${GREEN}$SUCCESS${NC}"
echo -e "Failed: ${RED}$FAILED${NC}"
echo -e "Success Rate: ${YELLOW}$(( SUCCESS * 100 / TOTAL ))%${NC}"
echo "================================================"

# Write results to log
echo "$(date): Validation complete - Success: $SUCCESS/$TOTAL" >> migration-validation.log

# Exit with error if any failures
if [ $FAILED -gt 0 ]; then
    exit 1
else
    exit 0
fi