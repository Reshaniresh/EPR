ex3=[('a',2),('b',6),('d',8),('a',125),('b',9),('f',90),('q',130),('f',99),('b',6),('b',6)]
out={}
avgdict={}
for i in ex3:
    if i[0] not in out:
        out.update({i[0]:i[1]/1})
        avgdict[i[0]]=1
    else:
        avgdict[i[0]]+=1
        resval=out[i[0]]+i[1]
        out.update({i[0]:out[i[0]]+i[1]})
for k,v in avgdict.items():
    if k in out:
        out[k]=out[k]/v
print('out...',out)

val=[1,2,22,2,2,4,4,4,5,5,5]
# res={}
# for i in val:
#     if i not in res:
#         res[i]=1
#     else:
#         res[i]+=1
# mxval=0
# resval={}
# for i in res:
#     if res[i] >mxval :
#         mxval=res[i]
#         resval.clear()
#         resval[i]=mxval
#     elif res[i] == mxval :
        
#         prevdic=list(resval.keys())
#         if i> int(prevdic[0]):
#             resval.clear()
#             resval[i]=mxval
# print('inp dict...',val)
# print(resval)