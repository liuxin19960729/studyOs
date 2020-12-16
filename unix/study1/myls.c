#include "apue.h"
#include <dirent.h>

int main(int args, char *argv[])
{
    DIR *dp;
    struct dirent *dirp;
    if (args != 2)
    {
        err_quit("usage:ls directory_name");
    }
    if ((dp = opendir(argv[1])) == NULL)//opendir 打开目录打开返回 dir stream  没有打开返回 null
    {
        err_sys("ERRO");
    }

    while ((dirp = readdir(dp)) != NULL)
    {
        printf("%s\n", dirp->d_name);
    }
    closedir(dp);
    exit(0);
}