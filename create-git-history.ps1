# create-git-history.ps1  (JS Course: commits spread from March to June)
# Put this file INSIDE the "JS Course" folder (next to README.md and arr.js), then run:
#   powershell -ExecutionPolicy Bypass -File .\create-git-history.ps1

# ---------- EDIT THESE ----------
$AuthorName  = "Dev Shrimankar"
$AuthorEmail = "devshrimankar4@gmail.com"   # must be a VERIFIED email on your GitHub account
$Year        = 2026
$StartDate   = Get-Date -Year $Year -Month 3 -Day 1 -Hour 0 -Minute 0 -Second 0
$EndDate     = Get-Date -Year $Year -Month 6 -Day 30 -Hour 0 -Minute 0 -Second 0
$Branch      = "main"
$RemoteUrl   = "https://github.com/dev45221904/JustJavaScript.git"                         # e.g. https://github.com/yourname/JS-Course.git ("" = don't push)
# --------------------------------

$ErrorActionPreference = "Continue"
Set-Location $PSScriptRoot

if (-not (Test-Path "arr.js") -or -not (Test-Path "README.md")) {
    Write-Host "Run this script from inside the 'JS Course' folder." -ForegroundColor Red
    exit 1
}

@"
node_modules/
.vscode/
*.log
.DS_Store
"@ | Set-Content -Path ".gitignore" -Encoding UTF8

if (-not (Test-Path ".git")) { git init -b $Branch | Out-Null }

$plan = @(
    @("Initial commit: add README and gitignore",              @("README.md", ".gitignore")),
    @("Add operators and conditionals lecture",                @("Lec_operators_conditional.js")),
    @("Add loops lecture",                                     @("Lec_loops.js")),
    @("Add strings lecture",                                   @("Lec_str.js")),
    @("Add arrays lecture and array examples",                 @("Lec_array.js", "arr.js")),
    @("Add functions and function methods",                    @("function.js", "Lec_function_methods.js")),
    @("Add prompt and function practice",                      @("Lec_prompt_func.js")),
    @("Add objects lecture",                                   @("Lec_obj.js")),
    @("Add practice set 1",                                    @("prac q/practice_set.js")),
    @("Add practice sets 2 and 3",                             @("prac q/practice_set2.js", "prac q/practice_set3.js")),
    @("Add array and function practice questions",             @("prac q/arr_prac_q.js", "prac q/functions.js")),
    @("Add practice lecture 1",                                @("Lec_prc1.js")),
    @("Add try/catch error handling lecture",                  @("Lec_tryCatch.js")),
    @("Add events lecture and basic HTML pages",               @("Lec_events.js", "html.html", "random.htm")),
    @("Add DOM learning files",                                @("DOM/learning")),
    @("Add counter app",                                       @("DOM/counterApp")),
    @("Add DOM practice questions",                            @("DOM/prc_Q")),
    @("Add string checker app",                                @("DOM/strCheck")),
    @("Add login logic project",                               @("DOM/LoginLogic")),
    @("Add flip game",                                         @("DOM/FlipGame")),
    @("Add car game",                                          @("DOM/carGame")),
    @("Add OOP lecture",                                       @("Lec_OOP.js")),
    @("Add OOP in JS and encapsulation examples",              @("OOPs_in_js.js", "Encapsulation.js")),
    @("Add JSON examples",                                     @("JSON")),
    @("Add callbacks and advanced JS lecture",                 @("AdvanceJS/callback.js", "AdvanceJS/Lec_advanced_js.js")),
    @("Add promises and fetch examples",                       @("AdvanceJS/promise.js", "AdvanceJS/fetch.js")),
    @("Add modules, imports and advance.html",                 @("AdvanceJS/import.js", "AdvanceJS/modules.js", "AdvanceJS/1b.js", "AdvanceJS/advance.html")),
    @("Add first Solidity file",                               @("AdvanceJS/sol.sol")),
    @("Add Apna College class notes",                          @("notes/apna college")),
    @("Add JS handbooks and OOP notes",                        @("notes")),
    @("Final cleanup",                                         @("."))
)

$n = $plan.Count
$span = ($EndDate - $StartDate).Days
$rand = New-Object System.Random
$prev = -1

for ($i = 0; $i -lt $n; $i++) {
    # evenly spaced with a little jitter, always moving forward
    $base = [int][Math]::Round($i * $span / ($n - 1))
    $off  = $base + $rand.Next(-1, 2)
    if ($off -le $prev) { $off = $prev + 1 }
    if ($i -eq $n - 1) { $off = $span }
    if ($off -gt $span) { $off = $span }
    $prev = $off

    $date = $StartDate.AddDays($off).AddHours($rand.Next(9, 23)).AddMinutes($rand.Next(0, 60))
    $iso  = $date.ToString("yyyy-MM-ddTHH:mm:ss") + "+05:30"

    foreach ($path in $plan[$i][1]) {
        if (Test-Path -LiteralPath $path) { git add -- $path 2>$null }
        else { Write-Host "  (skipped missing: $path)" -ForegroundColor DarkYellow }
    }

    $env:GIT_AUTHOR_NAME = $AuthorName;  $env:GIT_AUTHOR_EMAIL = $AuthorEmail
    $env:GIT_COMMITTER_NAME = $AuthorName; $env:GIT_COMMITTER_EMAIL = $AuthorEmail
    $env:GIT_AUTHOR_DATE = $iso; $env:GIT_COMMITTER_DATE = $iso

    git diff --cached --quiet
    if ($LASTEXITCODE -eq 0) { git commit --allow-empty -m $plan[$i][0] 2>$null | Out-Null }
    else { git commit -m $plan[$i][0] 2>$null | Out-Null }

    Write-Host ("{0}  {1}" -f $date.ToString("yyyy-MM-dd HH:mm"), $plan[$i][0])
}

"GIT_AUTHOR_NAME","GIT_AUTHOR_EMAIL","GIT_COMMITTER_NAME","GIT_COMMITTER_EMAIL","GIT_AUTHOR_DATE","GIT_COMMITTER_DATE" |
    ForEach-Object { Remove-Item "Env:$_" -ErrorAction SilentlyContinue }

Write-Host "`nDone. Total commits:" -ForegroundColor Green
git rev-list --count HEAD

if ($RemoteUrl -ne "") {
    if (git remote) { git remote remove origin }
    git remote add origin $RemoteUrl
    git push -u origin $Branch
}
